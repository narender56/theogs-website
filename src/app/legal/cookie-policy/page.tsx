import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-primary mb-6">JustIn Cookie Policy</h1>
      <p className="text-gray-600 mb-6">Effective Date: August 19, 2025</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">What Are Cookies?</h2>
        <p className="text-gray-700">
          JustIn uses cookies and similar technologies (e.g., pixels) to collect data for app functionality and analytics, compliant with global privacy laws such as GDPR (EU), CCPA (US), IT Act (India), PDPA (Singapore), and Privacy Act (Australia).
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Types of Cookies</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for app operation (e.g., user authentication).</li>
          <li><strong>Analytics Cookies:</strong> Help us understand app usage to enhance performance.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Managing Cookies</h2>
        <p className="text-gray-700">
          You can manage cookie preferences via our <Link href="/legal/consent" className="text-primary hover:text-secondary transition-colors">Consent Settings</Link> page, the JustIn app, or your browser settings. Note that disabling essential cookies may affect app functionality. We respect user choices in compliance with global regulations.
        </p>
      </section>
      <p className="text-gray-700">
        For questions, contact us at <a href="mailto:privacy@justin.app" className="text-primary hover:text-secondary transition-colors">privacy@justin.app</a>.
      </p>
    </div>
  );
}