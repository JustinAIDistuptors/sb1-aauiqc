import React from 'react';
import { Calculator, BarChart2, Bot, DollarSign, RefreshCw } from 'lucide-react';

const ToolCard = ({ 
  icon: Icon, 
  title, 
  users, 
  description, 
  actionText, 
  actionLink 
}: {
  icon: React.ElementType;
  title: string;
  users: string;
  description: string;
  actionText: string;
  actionLink: string;
}) => (
  <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 transition-all hover:-translate-y-2 hover:border-purple-600 text-center">
    <div className="absolute top-4 right-4 bg-purple-600/10 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
      Free Forever
    </div>
    
    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
      <Icon className="w-10 h-10 text-white" />
    </div>
    
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    
    <div className="text-purple-600 text-sm mb-4">
      {users} Users
    </div>
    
    <p className="text-gray-400 mb-8 min-h-[80px]">{description}</p>
    
    <a 
      href={actionLink}
      className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-purple-600/30"
    >
      {actionText}
    </a>
  </div>
);

const Tools = () => {
  const tools = [
    {
      icon: Calculator,
      title: "AI Agent ROI Calculator",
      users: "3,200+",
      description: "Calculate your potential savings and ROI from implementing AI agents. Get a customized analysis of cost savings and efficiency gains.",
      actionText: "Calculate ROI",
      actionLink: "#calculator"
    },
    {
      icon: BarChart2,
      title: "Task Analyzer",
      users: "2,800+",
      description: "Upload your task list and get instant analysis of which tasks are best suited for AI automation.",
      actionText: "Analyze Tasks",
      actionLink: "#analyzer"
    },
    {
      icon: Bot,
      title: "Prompt Builder",
      users: "4,500+",
      description: "Create effective prompts for your AI agents using our template builder. Select your use case and get optimized prompts.",
      actionText: "Build Prompts",
      actionLink: "#promptbuilder"
    },
    {
      icon: DollarSign,
      title: "Cost Comparison",
      users: "2,100+",
      description: "Compare the costs of human employees vs AI agents for specific tasks. Get detailed cost comparisons and breakeven analysis.",
      actionText: "Compare Costs",
      actionLink: "#costcalc"
    },
    {
      icon: RefreshCw,
      title: "Readiness Assessment",
      users: "1,800+",
      description: "Evaluate your business's readiness for AI integration. Get a detailed report with actionable steps and recommendations.",
      actionText: "Start Assessment",
      actionLink: "#assessment"
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Free AI Tools</h1>
        <p className="text-xl text-purple-600">Powerful tools to help you get started with AI agents</p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;