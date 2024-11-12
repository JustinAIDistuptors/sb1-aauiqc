import React from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-purple-600 transition-all duration-300">
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-purple-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-2">Email Us</h3>
            <a
              href="mailto:justin@aiagentsmadeeasy.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              justin@aiagentsmadeeasy.com
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-purple-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-2">Call Us</h3>
            <a
              href="tel:+15615587020"
              className="text-gray-300 hover:text-white transition-colors"
            >
              +1 (561) 558-7020
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-purple-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-2">Office Hours</h3>
            <p className="text-gray-300">Monday - Friday</p>
            <p className="text-gray-300">9:00 AM - 6:00 PM EST</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-purple-500 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-purple-500 mb-2">Location</h3>
            <p className="text-gray-300">4920 Conference Way N</p>
            <p className="text-gray-300">Boca Raton, FL 33431</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;