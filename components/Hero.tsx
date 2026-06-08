import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-raynote-black">
      {/* Prism background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full prism-bg blur-3xl transform rotate-12 scale-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect mb-8">
          <span className="text-acid-green text-sm font-medium">✨ Now in Beta</span>
        </div>

        {/* Hero headline */}
        <h1 className="font-archivo text-6xl md:text-8xl font-black mb-6 leading-none">
          <span className="block text-white">Your Notes,</span>
          <span className="block text-gradient">Every Device</span>
        </h1>

        {/* Value prop */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Capture lecture notes on any device and access them instantly anywhere.
          <span className="text-white font-semibold"> No formatting loss, no sync delays.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-flame-orange text-white font-bold text-lg rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl">
            Join the Waitlist
          </button>
          <button className="px-8 py-4 glass-effect text-white font-bold text-lg rounded-lg hover:bg-opacity-20 transition-all">
            See How It Works
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-acid-green text-2xl">↗</span>
            <span>10,000+ students waiting</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <span className="text-vivid-magenta text-2xl">⚡</span>
            <span>Instant sync across devices</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 prism-bg"></div>
    </section>
  );
}
