import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

export function Contact() {
  const [searchParams] = useSearchParams();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState<string | null>(null);

  useEffect(() => {
    const plan = searchParams.get('plan');
    const hasDiscount = searchParams.get('discount') === 'true';
    
    if (plan) {
      setSelectedPlan(plan);
      if (plan === 'diy' && hasDiscount) {
        setDiscountedPrice('42');
      }
    }
  }, [searchParams]);

  return (
    <div className="pt-32 pb-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-purple-600">Have questions? We're here to help you transform your business with AI agents</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
            <form action="https://formspree.io/f/mdkozgvp" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-400 mb-2">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-gray-400 mb-2">I'm Interested In</label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600"
                >
                  <option value="">Select an option</option>
                  <option value="diy">
                    DIY Community ({discountedPrice ? `$${discountedPrice}` : '$60'}/month)
                    {discountedPrice && ' - 30% OFF'}
                  </option>
                  <option value="assisted">Hands-On Assistance ($600/month)</option>
                  <option value="enterprise">Done-For-You Consulting ($6,000/month)</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-600"
                  placeholder="Tell us about your business and how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-0.5 transition-all hover:shadow-lg hover:shadow-purple-600/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-purple-600" />
              <div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a href="mailto:justin@aiagentsmadeeasy.com" className="text-gray-400 hover:text-purple-600">
                  justin@aiagentsmadeeasy.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-purple-600" />
              <div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a href="tel:+15615587020" className="text-gray-400 hover:text-purple-600">
                  +1 (561) 558-7020
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-purple-600" />
              <div>
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-400">Monday - Friday</p>
                <p className="text-gray-400">9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-purple-600" />
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-400">4920 Conference Way N</p>
                <p className="text-gray-400">Boca Raton, FL 33431</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;