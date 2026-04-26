import React, { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <section className="py-20 px-8 bg-surface-container-lowest overflow-hidden relative" id="contact">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px]"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-headline text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase">
          LET'S BUILD THE <br />
          <span className="text-primary italic">FUTURE_CORE</span>
        </h2>
        <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto">
          Available for senior engineering roles or high-impact backend collaborations. Let's discuss your next
          architectural challenge.
        </p>

        {submitted ? (
          <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-8 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="material-symbols-outlined text-secondary text-3xl">check_circle</span>
              <h3 className="font-headline text-2xl font-bold text-secondary">Message Sent!</h3>
            </div>
            <p className="text-on-surface-variant">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-surface-container border border-outline-variant/30 rounded-lg text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
              />
              {errors.name && <p className="text-error text-sm mt-2">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-surface-container border border-outline-variant/30 rounded-lg text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
              />
              {errors.email && <p className="text-error text-sm mt-2">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-6 py-4 bg-surface-container border border-outline-variant/30 rounded-lg text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
              {errors.message && <p className="text-error text-sm mt-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold rounded-md hover:shadow-[0_0_30px_rgba(129,236,255,0.4)] transition-all active:scale-95"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="flex justify-center gap-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs uppercase tracking-widest text-gray-500 hover:text-primary transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-xs uppercase tracking-widest text-gray-500 hover:text-primary transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:your.email@example.com"
            className="font-label text-xs uppercase tracking-widest text-gray-500 hover:text-primary transition-colors"
          >
            EMAIL
          </a>
        </div>
      </div>
    </section>
  )
}
