import { Icons } from './icons';
import { NavItem } from '@/types';

export const navItems: Record<string, NavItem[]> = {
  master: [
    { 
      label: 'Overview', 
      href: '/master', 
      icon: <Icons.Dashboard /> 
    },
    { 
      label: 'Transactions', 
      href: '/master/transactions', 
      icon: <Icons.Transactions /> 
    },
    { 
      label: 'Statistics', 
      href: '/master/statistics', 
      icon: <Icons.Statistics /> 
    },
  ],
  partner: [
    { 
      label: 'Overview', 
      href: '/partner', 
      icon: <Icons.Dashboard /> 
    },
    { 
      label: 'Transactions', 
      href: '/partner/transactions', 
      icon: <Icons.Transactions /> 
    },
    { 
      label: 'Statistics', 
      href: '/partner/statistics', 
      icon: <Icons.Statistics /> 
    },
  ],
};