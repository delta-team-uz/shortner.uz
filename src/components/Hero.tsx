import React from 'react';
import URLShortener from './URLShortener';

export default function Hero() {
  return (
    <section className="pt-20 pb-32 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 dark:opacity-10 bg-cover bg-center" />
      <div className="absolute inset-0 backdrop-blur-sm" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6">
            Shorten Your Links,<br />
            <span className="text-blue-500 dark:text-blue-400 animate-[neonPulse_2s_ease-in-out_infinite]">
              Expand Your Reach
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-blue-100 max-w-2xl mx-auto">
            Transform long, unwieldy URLs into clean, memorable links that are perfect for sharing anywhere.
          </p>
        </div>
        <URLShortener />
      </div>
    </section>
  );
}