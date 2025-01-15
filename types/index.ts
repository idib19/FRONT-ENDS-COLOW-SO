export interface User {
  id: string;
  name: string;
  email: string;
  role: 'master' | 'partner';
}

export interface Account {
  id: string;
  userId: string;
  accountNumber: string;
  balance: number;
  currency: string;
  type: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  amount: number;
  type: 'credit' | 'debit';
  description: string;
  date: string;
  status: 'pending' | 'completed' | 'failed';
}

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}