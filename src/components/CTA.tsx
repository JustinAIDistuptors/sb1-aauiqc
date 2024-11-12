import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Transform Your Business Today
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Don't wait—embrace AI agents now to future-proof your operations and drive growth. 
          Join the next wave of innovative businesses that are leveraging AI as their 
          competitive advantage.
        </p>
        <Link 
          to="/contact" 
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-600/30"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};

export default CTA;