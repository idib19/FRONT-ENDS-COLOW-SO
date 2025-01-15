"use client";

import { CreditCard, LayoutDashboard, Receipt, BarChart3, Send, Exchange } from 'lucide-react';
import { NavItem } from '@/types';

export const navItems: Record<string, NavItem[]> = {
  master: [
    { 
      label: 'Overview', 
      href: '/master', 
      icon: <LayoutDashboard className="w-5 h-5" /> 
    },
    { 
      label: 'Load Card', 
      href: '/master/load-card', 
      icon: <CreditCard className="w-5 h-5" /> 
    },
    { 
      label: 'Create Transaction', 
      href: '/master/create-transaction', 
      icon: <Receipt className="w-5 h-5" /> 
    },
    { 
      label: 'Transfer to Partner', 
      href: '/master/transfer-partner', 
      icon: <Send className="w-5 h-5" /> 
    },
    { 
      label: 'Statistics', 
      href: '/master/statistics', 
      icon: <BarChart3 className="w-5 h-5" /> 
    },
  ],
  partner: [
    { 
      label: 'Overview', 
      href: '/partner', 
      icon: <LayoutDashboard className="w-5 h-5" /> 
    },
    { 
      label: 'Transactions', 
      href: '/partner/transactions', 
      icon: <Receipt className="w-5 h-5" /> 
    },
    { 
      label: 'Load Card', 
      href: '/partner/load-card', 
      icon: <CreditCard className="w-5 h-5" /> 
    },
    { 
      label: 'Statistics', 
      href: '/partner/statistics', 
      icon: <BarChart3 className="w-5 h-5" /> 
    },
  ],
};