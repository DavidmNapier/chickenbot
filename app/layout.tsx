import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ChickenBot — AI Powered by Chicken Treat',
  description: 'Running on 11 herbs and algorithms. ChickenBot is your warm, absurdly supportive AI assistant.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${jetbrainsMono.variable} ${syne.variable}`}
            style={{ fontFamily: 'var(--font-manrope), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
