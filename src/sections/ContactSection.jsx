import React, { useEffect, useState } from 'react'

export default function ContactSection() {
  const formspreeEndpoint ='https://formspree.io/f/mzdylbkg'
  const submissionCooldownSeconds = 3

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [cooldownSeconds, setCooldownSeconds] = useState(0)

  useEffect(() => {
    if (cooldownSeconds <= 0) return undefined

    const intervalId = setInterval(() => {
      setCooldownSeconds((prev) => Math.max(prev - 1, 0))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [cooldownSeconds])

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

    if (submitError) {
      setSubmitError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (cooldownSeconds > 0) {
      setSubmitError(`Please wait ${cooldownSeconds}s before sending another message.`)
      return
    }

    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      if (!formspreeEndpoint) {
        setSubmitError('Formspree is not configured. Add VITE_FORMSPREE_FORM_ID to your .env file.')
        return
      }

      // Honeypot trap: if a bot fills this hidden field, do not submit to Formspree.
      if (formData.website.trim()) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '', website: '' })
        setCooldownSeconds(submissionCooldownSeconds)
        setTimeout(() => setSubmitted(false), 5000)
        return
      }

      setIsSubmitting(true)
      setSubmitError('')

      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _gotcha: formData.website,
          }),
        })

        if (!response.ok) {
          throw new Error('Unable to send your message right now. Please try again.')
        }

        setSubmitted(true)
        setFormData({ name: '', email: '', message: '', website: '' })
        setCooldownSeconds(submissionCooldownSeconds)
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } catch (error) {
        setSubmitError(error.message)
      } finally {
        setIsSubmitting(false)
      }
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
          <span className="text-primary italic">FUTURE_TOGETHER</span>
        </h2>
        <p className="text-on-surface-variant text-lg mb-12 max-w-xl mx-auto">
          Open to junior software engineering opportunities focused on backend development, .NET, and cloud delivery.
          Let&apos;s discuss how I can help build reliable, high-impact systems.
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
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                value={formData.website}
                onChange={handleChange}
              />
            </div>

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
              disabled={isSubmitting || cooldownSeconds > 0}
              className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-bold rounded-md hover:shadow-[0_0_30px_rgba(129,236,255,0.4)] transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : cooldownSeconds > 0 ? `Wait ${cooldownSeconds}s` : 'Send Message'}
            </button>

            {submitError && <p className="text-error text-sm">{submitError}</p>}
          </form>
        )}
      </div>
    </section>
  )
}
