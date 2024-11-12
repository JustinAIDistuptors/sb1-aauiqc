import React from 'react';
import { Button } from '../Button';

const ChatSupport = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-24 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-purple-500 mb-6">
          Need Immediate Assistance?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Our AI support team is available 24/7 to answer your questions and help you get started.
        </p>
        <Button href="#chat">Start Chat</Button>
      </div>
    </section>
  );
};

export default ChatSupport;