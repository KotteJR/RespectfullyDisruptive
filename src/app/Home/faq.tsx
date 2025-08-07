'use client';

import { useState } from 'react';
import { FiPlus, FiX, FiHelpCircle } from 'react-icons/fi';

const FAQ_DATA = [
  {
    question: "What types of clients do you typically work with?",
    answer: "We partner with a diverse range of clients, from high-growth startups to established enterprise companies. Our focus is on organizations that are ready to scale and are looking for a strategic partner to guide their digital transformation, not just a vendor to execute tasks."
  },
  {
    question: "What makes you different from other agencies?",
    answer: "We are a hybrid venture that combines strategic advisory with hands-on execution in design and engineering. Unlike traditional models, we don't do handovers. Our integrated team stays with you from strategy to scale, ensuring seamless delivery and alignment with your core business objectives."
  },
  {
    question: "What does your typical project process look like?",
    answer: "Our process is collaborative and structured around key phases: Discovery & Strategy, Design & Prototyping, Engineering & Development, and Launch & Scale. We begin by deeply understanding your business goals, then translate that into a high-performance digital product with continuous feedback loops."
  },
  {
    question: "How are projects priced?",
    answer: "We offer flexible engagement models tailored to your needs, including monthly retainers for ongoing partnership, fixed-price contracts for well-defined scopes, and hybrid models. We prioritize value and transparency, ensuring the pricing structure aligns with your strategic objectives."
  },
  {
    question: "How do we get started?",
    answer: "The first step is to book a call with us. We'll have an initial discovery session to understand your needs, challenges, and goals. From there, we'll outline a proposed engagement and a path forward to help you achieve your objectives."
  }
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes(prevIndexes =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center bg-[#E6F4EF] text-[#239D68] px-4 py-2 rounded-lg text-sm font-medium gap-2 mb-4">
            <FiHelpCircle className="h-5 w-5" />
            FAQs
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#239D68' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-md text-gray-700 w-full md:max-w-[600px] mx-auto leading-relaxed">
            Find answers to commonly asked questions about our services, process, and how we can partner with you to achieve your business goals.
          </p>
        </div>

        {/* FAQ Chat Layout */}
        <div className="max-w-[960px] mx-auto">
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openIndexes.includes(index);
              return (
                <div key={index}>
                  {/* Question (Outgoing Message) */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center gap-4 p-4 rounded-2xl rounded-br-none bg-[#239D68] text-white max-w-[460px] text-left"
                    >
                      <span className="text-md font-medium">{faq.question}</span>
                      <span className="flex-shrink-0">
                        <FiPlus
                          className={`h-5 w-5 transition-transform duration-300 ease-in-out ${
                            isOpen ? 'rotate-45' : 'rotate-0'
                          }`}
                        />
                      </span>
                    </button>
                  </div>

                  {/* Answer (Incoming Message) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-2">
                        <div className="flex justify-start">
                          <div className="p-4 rounded-2xl rounded-bl-none bg-gray-100 text-gray-900 max-w-[460px]">
                            <p className="text-md leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 