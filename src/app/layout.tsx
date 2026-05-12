import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Infotronic | Technology Consulting & Software Solutions',
  description:
    'Infotronic is a Naperville, Illinois technology consulting company providing software engineering, cloud infrastructure, DevOps, and enterprise technology consulting services.',
  keywords: [
    'Infotronic',
    'Naperville technology consulting',
    'software engineering consulting',
    'cloud consulting',
    'DevOps consulting',
    'enterprise IT solutions',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
