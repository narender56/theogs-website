import './globals.css';
import type { Metadata } from 'next';
import { Header } from '@/components';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TheOGs',
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white font-inter">
        <Header />
        <main className="bg-black">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* About */}
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  About TheOGs
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  TheOGs connects proven developers with top-tier opportunities
                  at unicorns, leading startups, and respected tech companies.
                  We cut the noise so skilled talent and great companies connect
                  faster.
                </p>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Legal
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  {[
                    { name: 'User Agreement', href: '/legal/user-agreement' },
                    { name: 'Privacy Policy', href: '/legal/privacy-policy' },
                    { name: 'Cookie Policy', href: '/legal/cookie-policy' },
                    {
                      name: 'Copyright Policy',
                      href: '/legal/copyright-policy',
                    },
                    { name: 'Consent Settings', href: '/legal/consent' },
                  ].map((link, i) => (
                    <li key={i}>
                      <Link
                        href={link.href}
                        className="hover:text-black transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xl font-playfair font-semibold mb-4">
                  Contact
                </h3>
                <p className="text-sm text-gray-400">
                  Email:{' '}
                  <a
                    href="mailto:theogsapp@gmail.com"
                    className="hover:text-black transition-colors"
                  >
                    theogsapp@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Footer Bottom */}
            <p className="text-center text-xs text-gray-500 mt-12">
              &copy; {new Date().getFullYear()} TheOGs. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
