"use client";

import { LayoutDashboard, Receipt, BarChart3 } from 'lucide-react';

export const Icons = {
  Dashboard: () => <LayoutDashboard className="w-5 h-5" />,
  Transactions: () => <Receipt className="w-5 h-5" />,
  Statistics: () => <BarChart3 className="w-5 h-5" />,
} as const;