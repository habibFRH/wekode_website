import React from "react";
import CurvedLoop from "./CurvedLoop";

const CurvedTextSection: React.FC = () => {
  return <section className="relative w-full min-h-screen bg-black  flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Curved Text Loop */}
      <div className="relative z-10 w-full mt-7">
        <CurvedLoop marqueeText="Portfolio Start-ups  Design  Saas  Landing Pages  Brand Strategies  Mobile Apps" speed={1.5} curveAmount={300} direction="left" interactive={true} className="text-white/90" />
      </div>

      {/* Additional content overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center z-20 mb-48">
          <h2 className="text-4xl md:text-6xl font-bold text-white/80 mb-4">
            From concept to launch
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto">
            we build engaging experiences and impactful brands
          </p>
        </div>
      </div>
    </section>;
};

export default CurvedTextSection;
