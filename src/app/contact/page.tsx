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
    <div className="animate-fade-in-scale max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-primary mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions or feedback? Reach out to the JustIn team, and we’ll get
        back to you as soon as possible. You can also email us directly at{' '}
        <a
          href="mailto:support@justin.app"
          className="text-primary hover:text-primary-hover font-semibold underline transition-colors"
        >
          support@justin.app
        </a>
        .
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-prtext-primary"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-prtext-primary"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-prtext-primary"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors w-full md:w-auto cursor-pointer"
        >
          Send Message
        </button>
      </form>
      <p className="text-gray-700 mt-6">
        Prefer to explore our app?{' '}
        <button className="text-primary hover:text-primary-hover font-semibold underline transition-colors">
          Get started with JustIn
        </button>
        .
      </p>
    </div>
  );
}
