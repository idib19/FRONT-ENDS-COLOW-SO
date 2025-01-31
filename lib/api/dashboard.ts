"use client";


interface MetricsResponse {
  balance: number;
  cardLoadCount: number;
  totalCardLoadAmount: number;
  commission: { month: string; value: number }[];
  claims: { status: string; value: number }[];
  lastColowsoTransfert: { amount: number; createdAt: string };
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;  

export async function fetchMasterAccountMetrics(token: string): Promise<MetricsResponse> {

  const userString = localStorage.getItem('user');
  if (!userString) throw new Error('User not found');
  
  const user = JSON.parse(userString);
  const masterId = user.entityId; 

  try {
    const response = await fetch(`${baseUrl}/master/metrics/${masterId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (response.status === 401) {
      throw new Error('Unauthorized');
    }

    if (!response.ok) {
      throw new Error('Failed to fetch metrics');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching balances:', error);
    throw error;
  }
}