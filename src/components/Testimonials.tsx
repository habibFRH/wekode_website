import React, { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Wekode transformed our digital presence completely. Their attention to detail and innovative approach helped us increase our online engagement by 300%. The team's expertise and dedication are unmatched.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "InnovateLab",
      content: "Working with Wekode was a game-changer for our startup. They delivered a mobile app that exceeded all our expectations. The user experience is flawless, and the development process was smooth and transparent.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCorp",
      content: "The e-commerce platform Wekode built for us has been instrumental in our growth. Sales increased by 250% in the first quarter after launch. Their technical expertise and business understanding are exceptional.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO",
      company: "DataFlow Systems",
      content: "Wekode's AI-powered solutions revolutionized our data processing capabilities. The implementation was seamless, and the results speak for themselves. We've seen a 400% improvement in efficiency.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Product Manager",
      company: "FutureTech",
      content: "The UI/UX design work from Wekode is outstanding. They understood our vision perfectly and created an interface that our users absolutely love. Customer satisfaction scores have never been higher.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-600"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center py-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-center mb-8">
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-white/20"
                />
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-white/70">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((testimonial) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(testimonial.id - 1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                testimonial.id - 1 === currentTestimonial
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-white/70">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/70">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">30+</div>
            <div className="text-white/70">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-white/70">Years Experience</div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                "{testimonial.content.substring(0, 120)}..."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-white font-semibold">{testimonial.name}</h5>
                  <p className="text-white/60 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
