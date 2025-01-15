import { User, Account, Transaction } from '@/types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Master Admin',
    email: 'master@example.com',
    role: 'master',
  },
  {
    id: '2',
    name: 'Partner User',
    email: 'partner@example.com',
    role: 'partner',
  },
];

export const mockAccounts: Account[] = [
  {
    id: '1',
    userId: '1',
    accountNumber: '1234567890',
    balance: 50000,
    currency: 'USD',
    type: 'Savings',
  },
  {
    id: '2',
    userId: '2',
    accountNumber: '0987654321',
    balance: 25000,
    currency: 'USD',
    type: 'Checking',
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    accountId: '1',
    amount: 1000,
    type: 'credit',
    description: 'Salary deposit',
    date: '2024-03-20',
    status: 'completed',
  },
  {
    id: '2',
    accountId: '1',
    amount: 500,
    type: 'debit',
    description: 'Utility payment',
    date: '2024-03-19',
    status: 'completed',
  },
];