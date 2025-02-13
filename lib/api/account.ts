import { fetchMasterAccountMetrics } from './dashboard';

interface TransactionVerification {
  isValid: boolean;
  message?: string;
}

export async function verifyTransactionAmount(
  userType: 'master',
  amount: number,
  rechargeType: string
): Promise<TransactionVerification> {
  try {
    // Basic amount validation
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Le montant doit être supérieur à 0");
    }

    // Get token from localStorage
    const tokenString = localStorage.getItem('token');
    if (!tokenString) {
      throw new Error("Session expirée, veuillez vous reconnecter");
    }

    // Fetch master's actual balance
    const metrics = await fetchMasterAccountMetrics(tokenString);
    const masterBalance = metrics.balance;

    // Check if master has sufficient balance
    if (userType === 'master' && masterBalance < amount) {
      throw new Error(`Solde insuffisant. Votre solde actuel est de ${masterBalance} FCFA`);
    }

    // Validate recharge type specific rules if needed
    if (rechargeType === 'uv') {
      // Add any UV-specific validation rules here
    }

    return {
      isValid: true,
    };
  } catch (error) {
    // Re-throw the error to be caught by the form's catch block
    throw error;
  }
}
