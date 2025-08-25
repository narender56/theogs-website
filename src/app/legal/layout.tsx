import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TheOGs - Your Legal Resource',
  description:
    'TheOGs provides comprehensive legal information including user agreements, privacy policies, cookie policies, and copyright policies.',
};

export default function LeagaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
