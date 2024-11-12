import React from 'react';
import { Button } from '../components/Button';

const StatCard = ({ number, text }: { number: string; text: string }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 text-center border border-gray-800 
                  hover:border-purple-600 transition-all duration-300 transform hover:-translate-y-2">
    <div className="text-5xl font-bold text-purple-600 mb-4">{number}</div>
    <p className="text-gray-300">{text}</p>
  </div>
);

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <div className="relative pl-8 pb-8 border-l border-purple-600 last:pb-0">
    <div className="absolute left-[-8px] top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
    <h3 className="text-2xl font-bold text-purple-500 mb-2">{year}: {title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Future = () => {
  const stats = [
    { number: "300%", text: "Average Productivity Increase" },
    { number: "1B+", text: "AI Agents by 2026" },
    { number: "24/7", text: "Continuous Operation" }
  ];

  const timeline = [
    {
      year: "2024",
      title: "The AI Agent Revolution Begins",
      description: "Early adopters are already seeing 300% productivity increases with AI agents handling routine tasks. Companies integrating AI agents are reporting significant cost savings and improved employee satisfaction."
    },
    {
      year: "2025",
      title: "AI Agents Become Mainstream",
      description: "500 million AI agents join the global workforce, transforming how businesses operate. Small and medium-sized businesses start adopting AI agents en masse, revolutionizing their operations and scaling capabilities."
    },
    {
      year: "2026",
      title: "The Billion Agent Milestone",
      description: "Over 1 billion AI agents actively supporting businesses worldwide, creating new opportunities for growth and innovation. AI agents become as common as productivity software, handling everything from customer service to complex data analysis."
    },
    {
      year: "Beyond",
      title: "Limitless Possibilities",
      description: "AI agents evolve to handle increasingly complex tasks, enabling businesses to scale operations without traditional limitations. The future of work becomes a harmonious blend of human expertise and AI capabilities, driving unprecedented growth."
    }
  ];

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Future of Work Is Here
          </h1>
          <p className="text-xl text-purple-500">
            Discover how AI agents are transforming the global workforce
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of the Future
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Don't wait for the future to happen - shape it. Start integrating AI agents 
            into your workflow today and stay ahead of the competition.
          </p>
          <Button href="#get-started">Get Started Now</Button>
        </div>
      </section>
    </div>
  );
};

export default Future;