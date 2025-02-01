export interface CreateCardLoadDTO {
    issuerId: string;
    cardId: string;
    issuerModel: 'Master' | 'Partner';
    amount: number;
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;  

  export async function createCardLoad(token: string, cardLoad: CreateCardLoadDTO): Promise<void> {
    const response = await fetch(`${baseUrl}/master/card-load`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cardLoad)
    });

    if (response.status === 401) {
      throw new Error('Unauthorized');
    }

    if (!response.ok) {
      throw new Error('Failed to create card load');
    }

    return response.json();
  }

  export interface CardLoadHistoryItem {
    issuerId: string;
    issuerModel: string;
    cardId: string;
    amount: number;
    createdAt: string;
    updatedAt: string;
    id: string;
  }

  export async function getCardLoadHistory(token: string, masterId: string): Promise<CardLoadHistoryItem[]> {
    const response = await fetch(`${baseUrl}/master/card-loads/${masterId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.status === 401) {
      throw new Error('Unauthorized');
    }

    if (!response.ok) {
      throw new Error('Failed to fetch card load history');
    }

    return response.json();
  }