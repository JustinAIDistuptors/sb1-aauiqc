import React from 'react';
import { Button } from './Button';

interface PricingCardProps {
  title: string;
  price: number;
  period: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  features,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-center border border-gray-800 
                    hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold text-purple-500 mb-4">{title}</h3>
      <div className="text-4xl font-bold text-white mb-6">
        ${price}<span className="text-base text-gray-500">/{period}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-400">{feature}</li>
        ))}
      </ul>
      <Button href={ctaLink}>{ctaText}</Button>
    </div>
  );
};

export default PricingCard;