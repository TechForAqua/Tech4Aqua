// pages/Faq.js

import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is web domain and hosting?',
      answer:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      question: 'Which server is best for websites linux or windows?',
      answer:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    },
    {
      question: 'Google cloud or Amazon server which one is best and fast?',
      answer:
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
    {
      question: 'Why Organic SEO is important for all businesses?',
      answer:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">FAQ&apos;s</h2>
          <p className="text-orange-500 mt-2">Lorem ipsum dolor sit amet</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-blue-600 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronDown className="text-blue-600" />
                ) : (
                  <FaChevronRight className="text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
