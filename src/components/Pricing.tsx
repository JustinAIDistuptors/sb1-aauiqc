import React from 'react';
import PricingCard from './PricingCard';

const pricingPlans = [
  {
    title: 'DIY with Our Skool Community',
    price: 60,
    period: 'month',
    features: [
      'Step-by-step tutorials',
      'Exclusive insights',
      'Supportive community access',
      'Self-paced learning',
    ],
    ctaText: 'Join the Community',
    ctaLink: '#join',
  },
  {
    title: 'Hands-On Assistance',
    price: 600,
    period: 'month',
    features: [
      'Expert guidance',
      'Tailored to your business',
      'Integration support',
      'Regular consultations',
    ],
    ctaText: 'Get Expert Help',
    ctaLink: '#expert',
  },
  {
    title: 'Done-For-You Consulting',
    price: 6000,
    period: 'month',
    features: [
      'Full implementation',
      'Seamless integration',
      'Complete workflow setup',
      'Dedicated support team',
    ],
    ctaText: 'Hire Us Today',
    ctaLink: '#hire',
  },
];

const Pricing = () => {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;