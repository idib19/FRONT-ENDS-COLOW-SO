import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Example: Fetch user data based on cookies
    const token = req.cookies.auth_token;
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Mock user data
    const user = {
      id: '1',
      email: 'user@example.com',
      role: token.includes('master') ? 'master' : 'partner',
    };

    return res.status(200).json(user);
  }

  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 