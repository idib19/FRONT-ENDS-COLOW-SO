import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/hooks/useAuth';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Financial Portal',
  description: 'Master and Partner Financial Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

          {children}
          
      </body>
    </html>
  );
}