import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JustIn - Your Legal Resource',
  description:
    'JustIn provides comprehensive legal information including user agreements, privacy policies, cookie policies, and copyright policies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-accent text-gray-900">
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About JustIn</h3>
                <p className="text-sm text-gray-300">
                  JustIn connects job seekers and employers through an intuitive
                  swipe-based platform, making job matching fast and efficient.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <Link
                      href="/legal/user-agreement"
                      className="hover:text-secondary transition-colors"
                    >
                      User Agreement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/privacy-policy"
                      className="hover:text-secondary transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/cookie-policy"
                      className="hover:text-secondary transition-colors"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/copyright-policy"
                      className="hover:text-secondary transition-colors"
                    >
                      Copyright Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/legal/consent"
                      className="hover:text-secondary transition-colors"
                    >
                      Consent Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-sm text-gray-300">
                  Email:{' '}
                  <a
                    href="mailto:support@justin.app"
                    className="hover:text-secondary transition-colors"
                  >
                    support@justin.app
                  </a>
                </p>
                <p className="text-sm text-gray-300 mt-2">
                  Follow us on social media for updates.
                </p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-8">
              &copy; {new Date().getFullYear()} JustIn. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
