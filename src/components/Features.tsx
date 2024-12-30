import React from 'react';
import { BarChart3, Shield, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
    title: 'Lightning Fast',
    description: 'Generate short URLs instantly with our optimized system'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
    title: 'Secure Links',
    description: 'All shortened URLs are protected and monitored for safety'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
    title: 'Detailed Analytics',
    description: 'Track clicks, geographic data, and referral sources'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-500 dark:text-blue-400 mb-12 animate-[neonPulse_2s_ease-in-out_infinite]">
          Why Choose Shortner.uz?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}