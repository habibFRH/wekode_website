import React from "react";
import TextType from "./TextType";

const Hero: React.FC = () => {
  return <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="relative z-10 text-center w-full max-w-4xl mx-auto pointer-events-none">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            Welcome to <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Wekode
            </span>
          </h1>

          <TextType text={["Crafting digital experiences that inspire and transform.","We build innovative solutions for the modern web."]} typingSpeed={75} pauseDuration={1500} showCursor={true} cursorCharacter="_" className="text-white/80 font-medium text-2xl mb-5" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto px-4">
            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 min-w-[140px]">
              Get Started
            </button>
            <button className="w-full sm:w-auto text-white/90 hover:text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:border-white/50 transition-all duration-300 min-w-[140px]">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>
    </div>;
};

export default Hero;
