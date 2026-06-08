import React from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Instant Cross-Device Sync',
    description: 'Start typing on your laptop, continue on your phone. Your notes appear instantly on every device — no manual sync, no waiting.',
    color: 'text-acid-green',
  },
  {
    icon: '📐',
    title: 'Zero Formatting Loss',
    description: 'Bold, italics, code blocks, diagrams — everything renders perfectly on every device. What you see is what you get, everywhere.',
    color: 'text-flame-orange',
  },
  {
    icon: '🎓',
    title: 'Built for Lectures',
    description: 'Voice-to-text, quick templates, and smart organization designed specifically for students. Capture everything without missing a word.',
    color: 'text-vivid-magenta',
  },
  {
    icon: '🔒',
    title: 'Offline-First Capture',
    description: 'No wifi in the lecture hall? No problem. Keep writing offline and everything syncs automatically when you\'re back online.',
    color: 'text-acid-green',
  },
  {
    icon: '🔍',
    title: 'Lightning-Fast Search',
    description: 'Find any note in milliseconds. Full-text search across all your lectures, with smart filters by course, date, or topic.',
    color: 'text-flame-orange',
  },
];

export default function Features() {
  return (
    <section className="py-32 bg-raynote-black relative overflow-hidden">
      {/* Background prism effect */}
      <div className="absolute top-0 right-0 w-96 h-96 prism-bg opacity-5 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="font-archivo text-5xl md:text-6xl font-black text-white mb-6">
            Why Students Choose <span className="text-gradient">Raynote</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to capture, organize, and access your lecture notes across all your devices.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Icon */}
              <div className={`text-5xl mb-6 ${feature.color}`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 prism-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm mb-6">TRUSTED BY STUDENTS FROM</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-white font-bold text-lg">MIT</div>
            <div className="text-white font-bold text-lg">Stanford</div>
            <div className="text-white font-bold text-lg">Harvard</div>
            <div className="text-white font-bold text-lg">Oxford</div>
            <div className="text-white font-bold text-lg">Cambridge</div>
          </div>
        </div>
      </div>
    </section>
  );
}
