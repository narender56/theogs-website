import Link from 'next/link';

export function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Find Your Dream Job with JustIn
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Swipe to connect with job opportunities worldwide. JustIn makes job
            matching fast, intuitive, and tailored to your preferences.
          </p>
          <button className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors text-lg font-semibold">
            Get Started
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-center">
            At JustIn, our mission is to revolutionize job searching by
            connecting job seekers and employers globally through a seamless,
            swipe-based platform. We aim to empower professionals in every
            country—whether in the EU, US, India, UAE, Singapore, Australia, or
            beyond—to find meaningful opportunities that match their skills and
            aspirations.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Why Use JustIn?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-accent p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Fast & Intuitive
              </h3>
              <p className="text-gray-700">
                Swipe through job listings in seconds, finding roles that suit
                your skills and preferences with ease.
              </p>
            </div>
            <div className="bg-accent p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Global Opportunities
              </h3>
              <p className="text-gray-700">
                Access jobs from employers worldwide, from startups to
                multinationals, in regions like the EU, US, and Asia.
              </p>
            </div>
            <div className="bg-accent p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Personalized Matches
              </h3>
              <p className="text-gray-700">
                Our algorithm learns your preferences to deliver tailored job
                recommendations, saving you time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Swipe Your Way to a New Job?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals finding their dream jobs with
            JustIn. Deactivate your account anytime via the app.
          </p>
          <button className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:bg-primary-hover transition-colors text-lg font-semibold">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
}
