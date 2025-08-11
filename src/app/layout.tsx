import type { Metadata } from 'next';
import { Geist, Geist_Mono, Quicksand } from 'next/font/google';
import './globals.css';
import React from 'react';
import Navbar from '@/components/navigation/navbar';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const quicksand = Quicksand({
  variable: '--font-quicksand-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Topi Salonen',
  description: 'Dev portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${quicksand.variable} ${geistSans.variable}  ${geistMono.variable}`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
