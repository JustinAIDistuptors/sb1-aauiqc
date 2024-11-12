import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, TrendingUp, Rocket } from 'lucide-react';

const ValueProp = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center gap-3 bg-[rgba(138,43,226,0.1)] px-6 py-3 rounded-full">
    <Icon className="w-5 h-5 text-purple-600" />
    <span className="text-white">{text}</span>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Previous sections remain the same */}
      <section className="min-h-[90vh] flex items-center pt-20 md:pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 md:mb-16 leading-[1.15]">
            <span className="text-white">Effortlessly Scale Your Business</span>
            <br />
            <span className="bg-gradient-to-r from-[#4299E1] via-[#9F7AEA] to-[#ED64A6] text-transparent bg-clip-text">with AI Agents</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <ValueProp icon={Zap} text="Automate Tasks" />
            <ValueProp icon={TrendingUp} text="Boost Productivity" />
            <ValueProp icon={Rocket} text="Drive Growth" />
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Keep your skilled employees focused on what they do best while AI agents take care of the routine, 
            so you can scale faster and smarter.
          </p>

          <Link 
            to="/contact" 
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:transform hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-purple-600/30"
          >
            Start Scaling Today
          </Link>

          <div className="mt-24 bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
            <p className="text-xl text-purple-600 text-center font-semibold mb-12">
              Trusted by 500+ Forward-Thinking Businesses
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-purple-600 transition-all">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold mb-2">Enterprise Leaders</h3>
                <p className="text-purple-600">Fortune 500</p>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-purple-600 transition-all">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold mb-2">Tech Innovators</h3>
                <p className="text-purple-600">Silicon Valley</p>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-purple-600 transition-all">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-lg font-semibold mb-2">Global Brands</h3>
                <p className="text-purple-600">Worldwide</p>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-purple-600 transition-all">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-semibold mb-2">StartUp Success</h3>
                <p className="text-purple-600">Next Gen</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <p className="text-gray-300 italic mb-6">
                  "AI Agents Made Easy transformed our customer service. We saw a 300% increase in response time and significant cost savings within weeks."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                    EM
                  </div>
                  <div>
                    <div className="font-semibold">Emma Martinez</div>
                    <div className="text-purple-600">Director of Operations, CloudTech</div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <p className="text-gray-300 italic mb-6">
                  "The implementation was seamless. Our team now focuses on strategic tasks while AI handles the routine work. Game-changer!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                    AK
                  </div>
                  <div>
                    <div className="font-semibold">Alex Kumar</div>
                    <div className="text-purple-600">CTO, InnovateNow</div>
                  </div>
                </div>
              </div>

              <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
                <p className="text-gray-300 italic mb-6">
                  "The ROI was immediate. Within two months, we achieved unprecedented productivity levels and customer satisfaction scores."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-bold">
                    LW
                  </div>
                  <div>
                    <div className="font-semibold">Lisa Wong</div>
                    <div className="text-purple-600">CEO, FutureScale Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meet the Future of Work: 1 Billion New AI Agents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-purple-600 transition-all text-center">
              <div className="text-4xl mb-4">📈</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
              <div className="text-gray-300">Average Productivity Increase</div>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-purple-600 transition-all text-center">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-300">Continuous Operation</div>
            </div>
            
            <div className="bg-black/50 p-8 rounded-xl border border-gray-800 hover:border-purple-600 transition-all text-center">
              <div className="text-4xl mb-4">💰</div>
              <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/contact" 
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:transform hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-purple-600/30"
            >
              Start Your AI Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;