"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/constants/navigation';

interface SidebarProps {
  portal: 'master' | 'partner';
}

export function Sidebar({ portal }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const title = portal === 'master' ? 'Master Portal' : 'Partner Portal';
  const items = navItems[portal];

  const handleLogout = () => {
    document.cookie = 'auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    router.push('/');
  };

  return (
    <div className="min-h-screen w-64 bg-gray-900 text-white p-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold px-4">{title}</h2>
      </div>
      
      <nav className="space-y-1">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center px-4 py-2 text-sm rounded-lg transition-colors",
              pathname === item.href
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            )}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}

        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 mt-4 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Se déconnecter
        </button>
      </nav>
    </div>
  );
}