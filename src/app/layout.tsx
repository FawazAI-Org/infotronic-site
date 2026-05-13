import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://infotronic-site.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Infotronic | Software Engineering Contractors & IT Consulting',
  description:
    'Infotronic provides contract software engineering and IT consulting for recruiters and hiring teams. Fast onboarding across React, Next.js, Node.js, cloud, and DevOps.',
  keywords: [
    'Infotronic',
    'software engineering contractors',
    'contract software developers',
    'IT consulting firm',
    'Naperville software consulting',
    'recruiter contract engineering support',
    'React Next.js contractors',
    'software engineering consulting',
    'cloud consulting',
    'DevOps consulting',
    'enterprise IT solutions'
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Infotronic | Contract Software Engineering Partner',
    description:
      'Contract-ready engineers for product, platform, and modernization initiatives with fast ramp-up and reliable delivery.',
    url: '/',
    siteName: 'Infotronic',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infotronic | Contract Software Engineering Partner',
    description:
      'Recruiter-friendly contract engineering support for frontend, backend, cloud, and DevOps roles.',
  },
  category: 'technology consulting',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
