import React from 'react'
import luis from '../assets/luis.jpg'
import david from '../assets/david.jpg'
import billy from '../assets/billy.jpg'

const testimonials = [
  {
    quote: `“We used to do everything. Lectures, on-site courses, and even onsite projects with companies. We would work so many hours, visit clients, schools, and companies. Right when we launched our online training with Hotmart, we felt the difference.”`,
    avatar: luis,
    name: 'Luis Carlos Flores',
    role: 'Psychologist, coach, and founder of Niños de Ahora',
  },
  {
    quote: `“I wanted to take all of my experience to Spanish-speaking countries. That's when I found out about Hotmart. I realized that it was the perfect platform to reach new markets with what I have to offer. I launched my product with Hotmart, and it went far beyond what I had expected.”`,
    avatar: david,
    name: 'David Meltzer',
    role: 'Speaker, Author, and Creator of 5 Técnicas Para Cerrar Tratos',
  },
  {
    quote: `“They have the best checkout process that I've seen in 12 years of working in digital marketing. It just makes it easy to pay in your own currency. The options they have with Venmo, Apple Pay, PayPal… Potential customers might not buy because it’s too inconvenient. But Hotmart makes it convenient.”`,
    avatar: billy,
    name: 'Billy Gene is Marketing',
    role: 'Marketing expert & Hotmart Creator',
  },
]

const Join = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-12">
          Join creators who are living their passions.
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-lg p-8 flex flex-col"
            >
              {/* Quote */}
              <p className="text-gray-600 mb-8 leading-relaxed">{t.quote}</p>

              {/* Avatar & Info */}
              <div className="mt-auto flex items-center space-x-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Join
