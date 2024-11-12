import React from 'react';
import PricingGrid from '../components/pricing/PricingGrid';

export function Pricing() {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Choose Your Path to Efficiency</h1>
        <p className="text-xl text-purple-600">Select the perfect plan to transform your business with AI agents</p>
      </div>
      <PricingGrid />
    </div>
  );
}

export default Pricing;