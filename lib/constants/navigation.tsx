"use client";

import { Wallet, LayoutDashboard, Receipt, BarChart3, SendHorizontal, ArrowRightLeft } from 'lucide-react';
import { NavItem } from '@/types';

export const navItems: Record<string, NavItem[]> = {
  master: [
    { 
      label: 'Overview', 
      href: '/master', 
      icon: <LayoutDashboard /> 
    },
    { 
      label: 'Load Card', 
      href: '/master/load-card', 
      icon: <Wallet /> 
    },
    { 
      label: 'Transfer to Partner', 
      href: '/master/transfer-partner', 
      icon: <SendHorizontal /> 
    },
    { 
      label: 'Transactions', 
      href: '/master/create-transaction', 
      icon: <ArrowRightLeft /> 
    },
    { 
      label: 'Statistics', 
      href: '/master/statistics', 
      icon: <BarChart3 /> 
    },
  ],
  partner: [
    { 
      label: 'Overview', 
      href: '/partner', 
      icon: <LayoutDashboard /> 
    },
    { 
      label: 'Transactions', 
      href: '/partner/transactions', 
      icon: <ArrowRightLeft /> 
    },
    { 
      label: 'Statistics', 
      href: '/partner/statistics', 
      icon: <BarChart3 /> 
    },
  ],
};