import React from 'react';

const faqs = [
  {
    question: 'How long does implementation typically take?',
    answer: 'Implementation time varies by plan: DIY can start immediately, Hands-On typically takes 2-4 weeks, and Done-For-You is completed within 4-6 weeks.',
  },
  {
    question: 'Can I upgrade my plan later',
    answer: 'Yes! You can upgrade your plan at any time. We will help you transition smoothly to ensure no disruption to your operations.',
  },
  {
    question: 'What kind of support is included',
    answer: 'All plans include community support. Hands-On adds dedicated expert guidance, while Done-For-You provides a full support team available 24/7.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 mb-6 border border-gray-800"
          >
            <h3 className="text-xl font-semibold text-purple-500 mb-4">
              {faq.question}?
            </h3>
            <p className="text-gray-400">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;