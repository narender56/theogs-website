export default function CopyrightPolicyPage() {
    return (
      <div className="animate-fade-in max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-primary mb-6">JustIn Copyright Policy</h1>
        <p className="text-gray-600 mb-6">Effective Date: August 19, 2025</p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Respecting Intellectual Property</h2>
          <p className="text-gray-700">
            JustIn respects the intellectual property rights of others worldwide. Users must not post content that infringes copyrights, in compliance with applicable laws in regions like the EU, US, India, UAE, Singapore, and Australia.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Reporting Infringement</h2>
          <p className="text-gray-700">
            If you believe content on JustIn infringes your copyright, submit a notice to <a href="mailto:copyright@justin.app" className="text-primary hover:text-secondary transition-colors">copyright@justin.app</a> including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Your contact information.</li>
            <li>Description of the copyrighted work.</li>
            <li>Location of the infringing content.</li>
            <li>A statement of good faith belief that the use is unauthorized.</li>
            <li>Your signature (electronic or physical).</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Consequences</h2>
          <p className="text-gray-700">
            JustIn may remove infringing content and terminate accounts of repeat infringers, in accordance with global intellectual property laws.
          </p>
        </section>
      </div>
    );
  }