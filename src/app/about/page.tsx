import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-primary mb-6">About JustIn</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
        <p className="text-gray-700">
          JustIn was founded with a simple goal: to make job searching as
          intuitive as swiping on your favorite app. Launched in 2025, we’ve
          grown into a global platform connecting job seekers and employers
          across regions like the EU, US, India, UAE, Singapore, Australia, and
          beyond. Our swipe-based approach, inspired by modern technology,
          streamlines the hiring process, making it fast, engaging, and
          effective.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Vision</h2>
        <p className="text-gray-700">
          We envision a world where finding the right job or talent is seamless
          and accessible for everyone, everywhere. JustIn empowers professionals
          to discover opportunities that align with their skills and
          aspirations, while helping employers find the perfect match with ease.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Our Team</h2>
        <p className="text-gray-700">
          Our diverse team of innovators, based across the globe, is passionate
          about transforming the job market. From developers to career experts,
          we work together to ensure JustIn delivers a world-class experience,
          compliant with global standards like GDPR, CCPA, and more.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-4">Join Us</h2>
        <p className="text-gray-700">
          Ready to swipe your way to a new career?{' '}
          <button className="text-primary hover:text-primary-hover font-semibold underline transition-colors">
            Get started with JustIn
          </button>{' '}
          or contact us at{' '}
          <a
            href="mailto:support@justin.app"
            className="text-primary hover:text-primary-hover font-semibold underline transition-colors"
          >
            support@justin.app
          </a>{' '}
          to learn more.
        </p>
      </section>
    </div>
  );
}
