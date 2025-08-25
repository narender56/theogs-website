import Link from 'next/link';

export function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-black tracking-tight mb-6">
            TheOGs
          </h1>
          <div className="w-20 h-[2px] bg-white mx-auto mb-8"></div>

          <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8">
            Where{' '}
            <span className="font-semibold text-white">Senior Developers</span>{' '}
            Find{' '}
            <span className="font-semibold text-white">
              Elite Opportunities
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            The exclusive job platform for skilled software engineers, tech
            leads, and experienced developers. Skip the junior noise—find roles
            that match your expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/">
              <button className="px-12 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-gray-200 transition-colors duration-300">
                Enter TheOGs
              </button>
            </Link>
            <Link href="/about">
              <button className="px-12 py-4 border border-gray-500 text-white font-semibold text-lg rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
          <p className="text-xl text-gray-400 leading-relaxed font-light">
            At TheOGs, we connect skilled developers (3+ years) with companies
            seeking experienced talent. No entry-level spam, no rockstar ninja
            BS— just legitimate senior/mid-level/lead engineering roles at
            companies that value skill and pay accordingly.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Why TheOGs Choose Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Skilled-Only Roles',
                desc: 'Every position requires 3+ years experience or demonstrated skill. Mid-level, Senior, Staff, and Lead positions only.',
              },
              {
                title: 'Real Compensation',
                desc: 'Transparent salary ranges. $80k-$400k+ positions from FAANG, unicorns, and top startups.',
              },
              {
                title: 'Skip the BS',
                desc: 'No rockstar ninjas. No unpaid challenges. Just companies that respect your time and expertise.',
              },
            ].map((f, i) => (
              <div
                key={i}
                className="border border-gray-800 rounded-2xl p-8 hover:bg-white hover:text-black transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black text-center border-t border-gray-800">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to Level Up <br /> Your Dev Career?
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          TheOGs is for developers with 3+ years of experience or proven skills
          who are tired of wading through entry-level noise.
        </p>
        <Link href="/">
          <button className="px-12 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-gray-200 transition-colors duration-300">
            Join the Elite
          </button>
        </Link>
        <p className="text-sm text-gray-500 mt-8">
          3+ years experience or proven skills • $80k-$400k+ roles • Quality
          positions only
        </p>
      </section>
    </div>
  );
}
