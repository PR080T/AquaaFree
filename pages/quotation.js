import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useToast } from '../lib/toast-context'
import { LoadingSpinner } from '../components/LoadingSpinner'
import Footer from '../components/Footer'

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  city: '',
  companyName: '',
  businessType: '',
  advertiseContent: '',
  quantity: '',
  budget: ''
}

export default function Quotation() {
  const { addToast } = useToast()
  const [form, setForm] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getFieldClasses = (fieldName) => {
    const baseClasses = 'w-full px-4 py-3 rounded-lg border transition-all focus:outline-none bg-white text-gray-800 placeholder:text-gray-400'
    const successState = 'border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500'
    const errorState = 'border-red-500 focus:ring-2 focus:ring-red-200 focus:border-red-500'

    return `${baseClasses} ${errors[fieldName] ? errorState : successState}`
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({
      ...previous,
      [name]: value
    }))

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const validationErrors = {}

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      validationErrors.fullName = 'Name must be at least 2 characters long'
    }

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      validationErrors.email = 'Please enter a valid email address'
    }

    if (!form.phone.trim()) {
      validationErrors.phone = 'Phone number is required'
    }

    if (!form.city.trim()) {
      validationErrors.city = 'City is required'
    }

    if (!form.companyName.trim()) {
      validationErrors.companyName = 'Company name is required'
    }

    if (!form.businessType.trim()) {
      validationErrors.businessType = 'Please select your business type'
    }

    if (!form.advertiseContent.trim()) {
      validationErrors.advertiseContent = 'Please describe what you want to advertise'
    }

    if (!form.quantity.trim()) {
      validationErrors.quantity = 'Quantity is required'
    } else {
      const quantityValue = Number(form.quantity)
      if (!Number.isFinite(quantityValue) || quantityValue <= 0) {
        validationErrors.quantity = 'Quantity must be a positive number'
      } else if (!Number.isInteger(quantityValue)) {
        validationErrors.quantity = 'Quantity must be a whole number'
      }
    }

    if (!form.budget.trim()) {
      validationErrors.budget = 'Budget is required'
    } else {
      const budgetValue = Number(form.budget)
      if (!Number.isFinite(budgetValue) || budgetValue <= 0) {
        validationErrors.budget = 'Budget must be a positive rupee amount'
      }
    }

    setErrors(validationErrors)
    return Object.keys(validationErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateForm()) {
      addToast('Please correct the errors in the form', 'error')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:5000/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await response.json()
      console.log('Quote API response:', data)

      if (response.ok) {
        setForm(initialFormState)
        // Ensure toast is visible for at least 1 second
        addToast(data.message || 'Submitted successfully!', 'success', 1000)
      } else {
        const errorMessage = data.message || 'Failed to submit. Please try again later.'
        addToast(errorMessage, 'error', 1000)
      }
    } catch (error) {
      console.error('Quotation submission error:', error)
      addToast('Network error. Please check your connection and try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-teal-950 to-black text-teal-100">
      <header role="banner" className="site-header">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Link href="/">Aquaafree</Link>
          </div>
          <nav role="navigation" className="desktop-nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/#how-it-works" className="nav-link">How We Work</Link>
            <Link href="/quotation" className="nav-link nav-link-active">Quotation</Link>
            <Link href="/contact" className="nav-link">Contact Us</Link>
          </nav>
          <button className="mobile-nav-toggle" type="button" aria-label="Open navigation menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="mobile-nav-panel">
          <div className="container space-y-2 py-3">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/#how-it-works" className="nav-link">How We Work</Link>
            <Link href="/quotation" className="nav-link nav-link-active">Quotation</Link>
            <Link href="/contact" className="nav-link">Contact Us</Link>
          </div>
        </div>
      </header>

      <main className="container flex-1 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.span
              className="badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              Quotation Request
            </motion.span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-teal-100">
              Share Your Campaign Details
            </h1>
            <p className="mt-4 text-lg md:text-xl text-teal-100/80 max-w-2xl mx-auto">
              Provide your personal, business, and campaign information so we can craft a tailored quotation in Indian Rupees for your promotional water bottle initiative.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-panel p-8 md:p-12 space-y-10 border border-teal-900/50"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <section className="space-y-6">
              <header>
                <h2 className="text-2xl font-semibold text-teal-100">Personal Information</h2>
                <p className="mt-2 text-teal-100/70">Tell us how to reach you about the quotation.</p>
              </header>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name*
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    className={getFieldClasses('fullName')}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="form-error">{errors.fullName}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={getFieldClasses('email')}
                    placeholder="name@example.com"
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className={getFieldClasses('phone')}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="form-error">{errors.phone}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="city" className="form-label">
                    City*
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className={getFieldClasses('city')}
                    placeholder="Which city are you targeting?"
                  />
                  {errors.city && <p className="form-error">{errors.city}</p>}
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <header>
                <h2 className="text-2xl font-semibold text-teal-100">Business Information</h2>
                <p className="mt-2 text-teal-100/70">Help us understand your organisation.</p>
              </header>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">
                    Company Name*
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={form.companyName}
                    onChange={handleChange}
                    className={getFieldClasses('companyName')}
                    placeholder="Enter company name"
                  />
                  {errors.companyName && <p className="form-error">{errors.companyName}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="businessType" className="form-label">
                    Type of Business*
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                    className={getFieldClasses('businessType')}
                  >
                    <option value="">Select business type</option>
                    <option value="retail">Retail</option>
                    <option value="fmcg">FMCG</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.businessType && <p className="form-error">{errors.businessType}</p>}
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <header>
                <h2 className="text-2xl font-semibold text-teal-100">Campaign Information</h2>
                <p className="mt-2 text-teal-100/70">Outline your promotional needs in Indian Rupees.</p>
              </header>
              <div className="space-y-6">
                <div className="form-group">
                  <label htmlFor="advertiseContent" className="form-label">
                    What would you like to advertise?*
                  </label>
                  <textarea
                    id="advertiseContent"
                    name="advertiseContent"
                    rows={4}
                    required
                    value={form.advertiseContent}
                    onChange={handleChange}
                    className={`${getFieldClasses('advertiseContent')} resize-none`}
                    placeholder="Describe the product, service, or message you want on the bottles."
                  />
                  {errors.advertiseContent && <p className="form-error">{errors.advertiseContent}</p>}
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="quantity" className="form-label">
                      Quantity of Bottles*
                    </label>
                    <input
                      id="quantity"
                      name="quantity"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      step={1}
                      required
                      value={form.quantity}
                      onChange={handleChange}
                      className={getFieldClasses('quantity')}
                      placeholder="Enter the number of bottles you need"
                    />
                    {errors.quantity && <p className="form-error">{errors.quantity}</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget" className="form-label">
                      Budget (₹)*
                    </label>
                    <input
                      id="budget"
                      name="budget"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      step={1}
                      required
                      value={form.budget}
                      onChange={handleChange}
                      className={getFieldClasses('budget')}
                      placeholder="Enter your campaign budget in rupees"
                    />
                    {errors.budget && <p className="form-error">{errors.budget}</p>}
                  </div>
                </div>
              </div>
            </section>

            <div className="pt-4 border-t border-teal-900/50">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isSubmitting}
                className="w-full inline-flex justify-center items-center px-8 py-4 text-lg font-semibold btn-primary"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner size="sm" />
                    <span className="ml-2">Submitting...</span>
                  </>
                ) : (
                  'Submit'
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </main>

      <Footer />
    </div>
  )
}