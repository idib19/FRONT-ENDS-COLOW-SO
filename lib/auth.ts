import { LoginResponse } from '@/hooks/useAuth';




const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function login(username: string, password: string) {
  // In a real app, you'd validate credentials against your backend
  // This is just a mock implementation
  if (!username || !password) {
    throw new Error('Email and password are required');
  }
  
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
}
