'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent from ${name} (${email}): ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="animate-fade-in-scale max-w-4xl mx-auto bg-black text-white p-10 border border-gray-800 shadow-xl">
      <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
        <span className="text-gray-400">Contact</span> TheOGs
      </h1>

      <p className="text-gray-300 mb-10 text-center leading-relaxed">
        Have questions or feedback? Reach out to our team, and we’ll get back to
        you as soon as possible. You can also email us directly at{' '}
        <a
          href="mailto:theogsapp@gmail.com"
          className="underline underline-offset-2 hover:text-gray-100 transition-colors"
        >
          theogsapp@gmail.com
        </a>
        .
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            placeholder="Your message..."
            className="w-full border border-gray-700 rounded-lg px-4 py-3 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>

      <p className="text-gray-300 mt-10 text-center">
        Prefer to explore our app?{' '}
        <Link
          href="/get-started"
          className="underline underline-offset-2 hover:text-gray-100 font-semibold transition-colors"
        >
          Get started with TheOGs
        </Link>
        .
      </p>
    </div>
  );
}
