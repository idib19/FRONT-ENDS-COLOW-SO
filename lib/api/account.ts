"use client";

// Mock account data - replace with real API calls
const mockAccountBalances = {
  master: {
    uv: 100000,
    fcfa: 500000
  },
  partner: {
    uv: 50000,
    fcfa: 250000
  }
};

export async function getAccountBalance(accountType: 'master' | 'partner', currency: 'uv' | 'fcfa'): Promise<number> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockAccountBalances[accountType][currency];
}

export async function verifyTransactionAmount(
  accountType: 'master' | 'partner',
  amount: number,
  currency: 'uv' | 'fcfa'
): Promise<{ isValid: boolean; message?: string }> {
  const balance = await getAccountBalance(accountType, currency);
  
  if (amount <= 0) {
    return {
      isValid: false,
      message: "Le montant doit être supérieur à 0"
    };
  }
  
  if (amount > balance) {
    return {
      isValid: false,
      message: `Solde insuffisant. Solde actuel: ${balance} ${currency.toUpperCase()}`
    };
  }
  
  return { isValid: true };
}