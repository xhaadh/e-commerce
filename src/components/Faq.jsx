import React, { useState } from 'react'

const faqList = [
  {
    question: "How can I sell in other countries using Hotmart's payment system?",
    answer:
      "You can configure your Hotmart account to accept multiple currencies and enable international payment methods directly from your dashboard.",
  },
  {
    question: "If I’m selling in other countries, how does currency exchange work?",
    answer:
      "Hotmart handles the conversion at the time of transaction using real-time exchange rates, then deposits your local currency.",
  },
  {
    question: "How can I move my digital product and business to Hotmart?",
    answer:
      "You simply upload your content (video, ebook, course page) and configure pricing—Hotmart takes care of hosting, delivery, and compliance.",
  },
  {
    question: "Does Hotmart offer customer support for my business and customers?",
    answer:
      "Yes—Hotmart provides 24/7 support for creators and buyers via chat and email, plus a robust help center and community forum.",
  },
  {
    question: "Can you tell me about Hotmart’s security features?",
    answer:
      "Hotmart uses industry-standard encryption (SSL/TLS), secure hosting, and two-factor authentication to keep your products and data safe.",
  },
  {
    question: "Will Hotmart own my product?",
    answer:
      "No—your intellectual property remains yours. Hotmart only licenses the right to host and distribute your content.",
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-16 bg-white md:mb-20 mb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">
          Questions, Meet Answers.
        </h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-gray-700">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
