'use client';

import { useState } from 'react';

export default function ConsentPage() {
  const [essentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);

  const handleSave = () => {
    const consent = {
      essential: essentialCookies,
      analytics: analyticsCookies,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    alert('Consent settings saved!');
  };

  return (
    <div className="animate-fade-in max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-primary mb-6">Cookie Consent</h1>
      <p className="text-gray-600 mb-6">
        JustIn uses cookies to enhance your experience and provide analytics to improve our services. Manage your preferences below.
      </p>
      <div className="space-y-6">
        <div className="flex items-center border-b pb-4">
          <input
            type="checkbox"
            checked={essentialCookies}
            disabled
            className="mr-3 h-5 w-5 text-primary"
          />
          <span className="text-gray-700">Essential Cookies (Required for app functionality)</span>
        </div>
        <div className="flex items-center border-b pb-4">
          <input
            type="checkbox"
            checked={analyticsCookies}
            onChange={(e) => setAnalyticsCookies(e.target.checked)}
            className="mr-3 h-5 w-5 text-primary"
          />
          <span className="text-gray-700">Analytics Cookies (Help us improve the app)</span>
        </div>
        <button
          onClick={handleSave}
          className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full md:w-auto"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}