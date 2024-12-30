import React from 'react';
import { Link2 } from 'lucide-react';
import AuthButtons from './auth/AuthButtons';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed w-full py-4 px-6 bg-white/50 dark:bg-black/50 backdrop-blur-md z-50 shadow-lg shadow-blue-500/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link2 className="h-6 w-6 text-blue-400" />
          <span className="text-xl font-bold text-blue-400 animate-[neonPulse_2s_ease-in-out_infinite]">
            Shortner.uz
          </span>
        </div>
        <nav className="flex items-center space-x-8">
          <ul className="flex space-x-6">
            <li>
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#statistics" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors">
                Statistics
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors">
                Pricing
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <AuthButtons />
          </div>
        </nav>
      </div>
    </header>
  );
}