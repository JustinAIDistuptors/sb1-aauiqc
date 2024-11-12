import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  planType: string;
}

export function PricingCard({ title, price, features, buttonText, isPopular, planType }: PricingCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/contact?plan=${planType}`);
  };

  return (
    <div className={`relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 transition-all hover:-translate-y-2 hover:border-purple-600 ${isPopular ? 'border-purple-600' : ''} flex flex-col h-full`}>
      {isPopular && (
        <div className="absolute -top-4 right-6 bg-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-purple-600 mb-4">{title}</h3>
      
      <div className="text-4xl font-bold mb-6">
        ${price}
        <span className="text-base font-normal text-gray-400">/month</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-gray-400">
            <Check className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className="w-full bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-purple-600/30"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default PricingCard;