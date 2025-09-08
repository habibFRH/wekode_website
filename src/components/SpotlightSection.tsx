import React from "react";
import SpotlightCard from "./SpotlightCard";

const SpotlightSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center py-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Discover our comprehensive range of digital solutions designed to
            elevate your business
          </p>
        </div>

        {/* Spotlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Card 1 */}
          <SpotlightCard
            className="h-80 flex flex-col justify-center items-center text-center"
            spotlightColor="rgba(147, 51, 234, 0.3)"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Web Development
            </h3>
            <p className="text-white/70 leading-relaxed">
              Custom websites and web applications built with modern
              technologies and best practices.
            </p>
          </SpotlightCard>

          {/* Card 2 */}
          <SpotlightCard
            className="h-80 flex flex-col justify-center items-center text-center"
            spotlightColor="rgba(59, 130, 246, 0.3)"
          >
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mobile Apps</h3>
            <p className="text-white/70 leading-relaxed">
              Native and cross-platform mobile applications that deliver
              exceptional user experiences.
            </p>
          </SpotlightCard>

          {/* Card 3 */}
          <SpotlightCard
            className="h-80 flex flex-col justify-center items-center text-center"
            spotlightColor="rgba(236, 72, 153, 0.3)"
          >
            <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-pink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">UI/UX Design</h3>
            <p className="text-white/70 leading-relaxed">
              Beautiful and intuitive user interfaces that engage users and
              drive conversions.
            </p>
          </SpotlightCard>

          {/* Card 4 */}
          <SpotlightCard
            className="h-80 flex flex-col justify-center items-center text-center"
            spotlightColor="rgba(34, 197, 94, 0.3)"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Digital Strategy
            </h3>
            <p className="text-white/70 leading-relaxed">
              Comprehensive digital strategies that align with your business
              goals and objectives.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
