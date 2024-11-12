import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-[80vh] pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Effortlessly Scale Your Business with AI Agents – No Workforce Disruption
          </h1>
          <p className="text-2xl text-purple-500 mb-6">
            Automate Tasks • Boost Productivity • Drive Growth
          </p>
          <p className="text-gray-300 text-lg mb-8">
            Keep your skilled employees focused on what they do best while AI agents take care of the routine, 
            so you can scale faster and smarter.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-600/30"
          >
            Start Scaling Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;