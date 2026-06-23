import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AuthProvider } from '@/lib/auth-context';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sapphire OS - Learning Platform',
  description:
    'An intelligent, gamified learning platform for CSEC Mathematics and English. Master your skills with AI-powered coaching and real-time progress tracking.',
  keywords: ['learning', 'education', 'CSEC', 'mathematics', 'english', 'AI coach', 'gamification'],
  authors: [{ name: 'Sapphire OS Team' }],
  creator: 'Sapphire OS Team',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sapphire-os.com',
    title: 'Sapphire OS - Learning Platform',
    description: 'Master CSEC with AI coaching and gamification',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sapphire OS',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
