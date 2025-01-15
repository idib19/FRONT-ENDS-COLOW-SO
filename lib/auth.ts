import { cookies } from 'next/headers';

export async function getUser() {
  const token = cookies().get('auth_token');
  if (!token) return null;
  
  // In a real app, you'd verify the token and fetch user data
  // This is just a mock implementation
  return {
    id: '1',
    email: 'user@example.com',
    role: token.value.includes('master') ? 'master' : 'partner',
  };
}

export async function login(email: string, password: string) {
  // In a real app, you'd validate credentials against your backend
  // This is just a mock implementation
  if (!email || !password) {
    throw new Error('Email and password are required');
  }
  
  // Mock token generation
  const token = `mock_token_${email}_${Date.now()}`;
  
  // Set cookie
  cookies().set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
  
  return {
    token,
    user: {
      id: '1',
      email,
      role: email.includes('master') ? 'master' : 'partner',
    },
  };
}

export async function logout() {
  cookies().delete('auth_token');
}