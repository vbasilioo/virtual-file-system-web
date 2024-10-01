import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { ReactNode } from 'react';

interface ILayout {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: ILayout) {
  return (
    <div suppressHydrationWarning={true}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
