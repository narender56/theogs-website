import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-primary mb-6">JustIn Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Effective Date: August 19, 2025</p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Data We Collect</h2>
        <p className="text-gray-700">
          JustIn collects personal data to provide our job swipe match services globally, including:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Profile information (e.g., name, email, phone number).</li>
          <li>Job preferences and swipe interactions (likes/rejects).</li>
          <li>Device data (e.g., IP address, browser type) and usage data via cookies.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">How We Use Data</h2>
        <p className="text-gray-700">
          We use your data to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Match job seekers with employers based on swipe interactions.</li>
          <li>Improve our services and personalize job recommendations.</li>
          <li>Comply with global legal obligations, including GDPR (EU), CCPA (US), IT Act (India), PDPA (Singapore), and Privacy Act (Australia).</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Data Retention</h2>
        <p className="text-gray-700">
          To ensure fair matching, we retain certain data (e.g., email, phone number, swipe history) even if you deactivate your account via the JustIn app’s settings. Deactivation limits visibility but retains data for matching integrity. Users in regions like the EU, US, India, UAE, Singapore, and Australia may request data deletion where permitted by applicable laws, though some data may be retained to comply with our legitimate interests.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Data Sharing</h2>
        <p className="text-gray-700">
          We share data with:
        </p>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Employers for job matching (with your consent).</li>
          <li>Service providers for analytics and app functionality, compliant with global privacy laws.</li>
          <li>Legal authorities when required by law in any jurisdiction.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Your Rights</h2>
        <p className="text-gray-700">
          Depending on your region, you have rights under laws like GDPR (EU), CCPA (US), IT Act (India), PDPA (Singapore), and Privacy Act (Australia), including access, rectification, and objection to data processing. To exercise these rights or deactivate your account, use the JustIn app’s settings or contact us at <a href="mailto:privacy@justin.app" className="text-primary hover:text-secondary transition-colors">privacy@justin.app</a>.
        </p>
      </section>
      <p className="text-gray-700">
        For full details, contact us at <a href="mailto:privacy@justin.app" className="text-primary hover:text-secondary transition-colors">privacy@justin.app</a>.
      </p>
    </div>
  );
}