import Link from 'next/link';

export default function UserAgreementPage() {
  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-primary mb-6">
        JustIn User Agreement
      </h1>
      <p className="text-gray-600 mb-6">Effective Date: August 19, 2025</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Introduction
        </h2>
        <p className="text-gray-700">
          Welcome to JustIn, a job swipe match app connecting job seekers and
          employers worldwide. By using our services, you agree to this User
          Agreement, our{' '}
          <Link
            href="/legal/privacy-policy"
            className="text-tahiti hover:text-bermuda font-semibold underline transition-colors"
          >
            Privacy Policy
          </Link>
          ,{' '}
          <Link
            href="/legal/cookie-policy"
            className="text-tahiti hover:text-bermuda font-semibold underline transition-colors"
          >
            Cookie Policy
          </Link>
          , and{' '}
          <Link
            href="/legal/copyright-policy"
            className="text-tahiti hover:text-bermuda font-semibold underline transition-colors"
          >
            Copyright Policy
          </Link>
          . This agreement is a legally binding contract applicable in all
          regions, including the EU, US, India, UAE, Singapore, Australia, and
          others.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Your Obligations
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Provide accurate information and keep it updated.</li>
          <li>
            Use JustIn for professional job-seeking or hiring purposes only.
          </li>
          <li>
            Comply with all applicable laws, including but not limited to GDPR
            (EU), CCPA (US), IT Act (India), PDPA (Singapore), and Privacy Act
            (Australia).
          </li>
          <li>Do not share your account or post harassing/illegal content.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Termination
        </h2>
        <p className="text-gray-700">
          You may deactivate your account at any time through the JustIn app’s
          settings. Deactivation limits visibility but retains certain data as
          outlined in our{' '}
          <Link
            href="/legal/privacy-policy"
            className="text-tahiti hover:text-bermuda font-semibold underline transition-colors"
          >
            Privacy Policy
          </Link>
          . JustIn may suspend or terminate your account for violations of this
          agreement.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-4">Contact</h2>
        <p className="text-gray-700">
          For legal notices, contact us at{' '}
          <a
            href="mailto:legal@justin.app"
            className="text-tahiti hover:text-bermuda font-semibold underline transition-colors"
          >
            legal@justin.app
          </a>
          .
        </p>
      </section>
    </div>
  );
}
