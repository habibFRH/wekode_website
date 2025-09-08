import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center py-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Wekode
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            We are passionate creators dedicated to transforming ideas into digital reality
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Founded with a vision to bridge the gap between innovative ideas and exceptional digital experiences, 
              Wekode has been at the forefront of digital transformation. We believe that great technology should 
              be accessible, intuitive, and powerful.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Our team combines years of industry experience with cutting-edge technologies to deliver solutions 
              that not only meet your needs but exceed your expectations. From startups to enterprise clients, 
              we've helped businesses of all sizes achieve their digital goals.
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-white/70">Happy Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-white/70">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/70">Support</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Innovation</h4>
              <p className="text-white/70">
                We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Quality</h4>
              <p className="text-white/70">
                Every project is crafted with meticulous attention to detail, ensuring the highest standards of quality and performance.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Collaboration</h4>
              <p className="text-white/70">
                We work closely with our clients as partners, fostering open communication and shared success throughout every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
