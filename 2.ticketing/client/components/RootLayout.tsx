import React from 'react';
import { Inter } from 'next/font/google';

import Navbar from './Navbar';
import { CurrentUserProps } from '@/pages';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  currentUser: CurrentUserProps['currentUser'];
};

export default function RootLayout({ children, currentUser }: Props) {
  return (
    <main
      className={`flex flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Navbar currentUser={currentUser} />
      {children}
    </main>
  );
}
