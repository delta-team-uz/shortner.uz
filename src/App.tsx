import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import './styles/neon.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Features />

        {/* Statistics Section */}
        <section id="statistics" className="py-16 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2 animate-[neonPulse_2s_ease-in-out_infinite]">
                  10M+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Links Shortened</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2 animate-[neonPulse_2s_ease-in-out_infinite]">
                  5M+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Monthly Clicks</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-2 animate-[neonPulse_2s_ease-in-out_infinite]">
                  100K+
                </div>
                <div className="text-gray-600 dark:text-gray-400">Happy Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white dark:bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-100/20 dark:bg-blue-600/20 backdrop-blur-[100px]" />
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-500 dark:text-blue-400 mb-6 animate-[neonPulse_2s_ease-in-out_infinite]">
              Ready to Start Shortening?
            </h2>
            <p className="text-xl text-gray-600 dark:text-blue-100 mb-8">
              Join thousands of users who trust Shortner.uz for their link management needs.
            </p>
            <button className="px-8 py-4 bg-blue-500 dark:bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors">
              Get Started - It's Free!
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-black text-gray-600 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-blue-500 dark:text-blue-400 font-semibold mb-4">Shortner.uz</h3>
              <p className="text-sm">
                Making the web more accessible, one short link at a time.
              </p>
            </div>
            <div>
              <h4 className="text-blue-500 dark:text-blue-400 font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-500 dark:text-blue-400 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-500 dark:text-blue-400 font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-center">
            © {new Date().getFullYear()} Shortner.uz. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;