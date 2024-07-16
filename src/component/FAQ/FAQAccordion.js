import React, { useState } from 'react';

const FAQAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-3/4 mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 bg-gray-200 rounded-md shadow-md focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
              </div>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 bg-white rounded-md shadow-md">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
