'use client';

import '@/styles/globals.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
