import React from 'react';
import PricingCard from './PricingCard';

export function PricingGrid() {
  const plans = [
    {
      title: "DIY with Our Skool Community",
      price: 60,
      features: [
        "Step-by-step tutorials",
        "Exclusive insights",
        "Supportive community access",
        "Self-paced learning",
        "Weekly Q&A sessions",
        "Resource library access"
      ],
      buttonText: "Join the Community",
      planType: "diy"
    },
    {
      title: "Hands-On Assistance",
      price: 600,
      features: [
        "Everything in DIY, plus:",
        "Expert guidance",
        "Tailored to your business",
        "Integration support",
        "Regular consultations",
        "Priority support"
      ],
      buttonText: "Get Expert Help",
      isPopular: true,
      planType: "assisted"
    },
    {
      title: "Done-For-You Consulting",
      price: 6000,
      features: [
        "Everything in Hands-On, plus:",
        "Full implementation",
        "Seamless integration",
        "Complete workflow setup",
        "Dedicated support team",
        "Custom AI agent development"
      ],
      buttonText: "Hire Us Today",
      planType: "enterprise"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
      {plans.map((plan) => (
        <PricingCard key={plan.title} {...plan} />
      ))}
    </div>
  );
}

export default PricingGrid;