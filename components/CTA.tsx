"use client"

import React, { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In production, this would send to your API
    }
  };

  return (
    <section className="py-32 bg-raynote-black relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 prism-bg opacity-5 blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Pricing teaser */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <span className="text-acid-green text-sm font-bold">EARLY BIRD PRICING</span>
          </div>

          <h2 className="font-archivo text-5xl md:text-6xl font-black text-white mb-6">
            Start Free,
            <br />
            <span className="text-gradient">Upgrade When You're Ready</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            Join thousands of students already on the waitlist. Be first to get access when we launch.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Free tier */}
          <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Student</h3>
              <div className="text-5xl font-black text-white mb-2">Free</div>
              <p className="text-gray-400">Perfect for getting started</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-acid-green">✓</span>
                <span className="text-gray-300">Up to 3 devices</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-acid-green">✓</span>
                <span className="text-gray-300">1,000 notes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-acid-green">✓</span>
                <span className="text-gray-300">Basic formatting</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-acid-green">✓</span>
                <span className="text-gray-300">7-day version history</span>
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg border border-gray-700 text-white font-bold hover:bg-gray-800 transition-all">
              Get Started Free
            </button>
          </div>

          {/* Pro tier */}
          <div className="relative p-8 rounded-2xl bg-gray-900 border-2 border-flame-orange">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-flame-orange text-white px-4 py-1 rounded-full text-sm font-bold">
              MOST POPULAR
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-5xl font-black text-white mb-2">
                $4.99<span className="text-lg text-gray-400">/mo</span>
              </div>
              <p className="text-gray-400">For serious students</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-acid-green">✓</span>
                <span className="text-gray-300">Unlimited devices</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-acid-green">✓</span>
                <span className="text-gray-300">Unlimited notes</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-acid-green">✓</span>
                <span className="text-gray-300">Advanced formatting + diagrams</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-acid-green">✓</span>
                <span className="text-gray-300">90-day version history</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-acid-green">✓</span>
                <span className="text-gray-300">Voice-to-text transcription</span>
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-flame-orange text-white font-bold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Join Waitlist - 50% Off Launch Price
            </button>
          </div>
        </div>

        {/* Waitlist signup */}
        {!submitted ? (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Be First to Get <span className="text-gradient">Raynote</span>
              </h3>
              <p className="text-gray-400">
                Join 10,000+ students on the waitlist. Get early access + 50% off Pro for life.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-flame-orange transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-vivid-magenta text-white font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-3xl font-bold text-white mb-4">You're on the list!</h3>
            <p className="text-xl text-gray-400">
              We'll notify you when Raynote launches. Get ready to transform how you take notes.
            </p>
          </div>
        )}

        {/* Social proof counter */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-full glass-effect">
            <div className="text-center">
              <div className="text-3xl font-black text-gradient">10,247</div>
              <div className="text-sm text-gray-400">Students Waiting</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-acid-green">97%</div>
              <div className="text-sm text-gray-400">Would Recommend</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-vivid-magenta">4.9/5</div>
              <div className="text-sm text-gray-400">Early Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
