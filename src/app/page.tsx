'use client';

import Dashboard from '@/components/dashboard-04';
import { ThemeProvider } from 'next-themes';
import Layout from './_layouts';

export default function Home() {
  return (
    <Layout>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </Layout>
  );
}
