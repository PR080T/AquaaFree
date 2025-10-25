import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { testConfig } from '../test/utils'
import Footer from '../components/Footer'

const isTest = process.env.NODE_ENV === 'test'

export default function Home(){
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const statsVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, delay: 0.2 }
  }

  const toggleMobileNav = () => setMobileNavOpen(value => !value)
  const closeMobileNav = () => setMobileNavOpen(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-teal-950 to-black flex flex-col">
      <Head>
        <title>Aquaafree</title>
        <meta name="description" content="Free drinking water distribution with powerful brand visibility" />
      </Head>

      <header role="banner" className="site-header">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Link href="/">Aquaafree</Link>
          </div>
          <nav role="navigation" className="desktop-nav">
            <Link href="/" className="nav-link nav-link-active">Home</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/#how-it-works" className="nav-link">How We Work</Link>
            <Link href="/quotation" className="nav-link">Quotation</Link>
            <Link href="/contact" className="nav-link">Contact Us</Link>
          </nav>
          <button
            className="mobile-nav-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-nav-panel"
            onClick={toggleMobileNav}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div id="mobile-nav-panel" className={`mobile-nav-panel${isMobileNavOpen ? ' mobile-nav-panel-open' : ' hidden'}`}>
          <div className="container space-y-2 py-3">
            <Link href="/" className="nav-link nav-link-active" onClick={closeMobileNav}>Home</Link>
            <Link href="/about" className="nav-link" onClick={closeMobileNav}>About Us</Link>
            <Link href="/#how-it-works" className="nav-link" onClick={closeMobileNav}>How We Work</Link>
            <Link href="/quotation" className="nav-link" onClick={closeMobileNav}>Quotation</Link>
            <Link href="/contact" className="nav-link" onClick={closeMobileNav}>Contact Us</Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 flex-1">
        <section className="hero relative overflow-hidden py-20 bg-gradient-to-br from-black via-teal-950 to-black text-teal-100">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="hero-content z-10 max-w-2xl"
              {...(isTest ? testConfig : {
                initial: "initial",
                animate: "animate"
              })}
              variants={fadeIn}
            >
              <h1 className="text-6xl font-bold mb-8 leading-tight">
                <span className="block bg-gradient-to-r from-teal-200 via-teal-300 to-teal-100 bg-clip-text text-transparent">
                  We distribute free drinking water.
                </span>
                <span className="block text-4xl mt-4 text-teal-200/90">
                  You get powerful brand visibility
                </span>
              </h1>
              <p className="text-2xl text-teal-100/80 mb-8 leading-relaxed">
                Transform your marketing budget into meaningful impact while achieving unparalleled brand exposure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/quotation" 
                  className="btn-primary text-base sm:text-lg"
                >
                  Get Started
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="#how-it-works" 
                  className="btn-secondary text-base sm:text-lg"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              className="relative w-full lg:w-1/2 drop-shadow-xl"
              {...(isTest ? testConfig : {
                initial: { opacity: 0, x: 100 },
                animate: { opacity: 1, x: 0 }
              })}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/headline.png" 
                alt="Water bottle with branding" 
                className="w-full h-auto max-w-2xl mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-[-1]" />
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="section-surface p-10 md:p-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6 text-teal-100">About Us</h2>
              <p className="text-xl text-teal-100/80 mb-6">
                Founded by Amogh Jain, Aquaafree bridges the gap between impactful marketing and community welfare.
                Our innovative approach transforms water distribution into a powerful force for positive change.
              </p>
              <p className="text-xl text-teal-100/80 mb-12">
                We believe in creating lasting impact through community harmony, sustainable practices, and accessible water distribution.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {[
                {
                  title: "Community Harmony",
                  description: "Fostering unity and cooperation through accessible water distribution and local engagement",
                  icon: "🤝"
                },
                {
                  title: "Maximum Impact",
                  description: "Strategic distribution in high-traffic areas ensures your message reaches thousands daily",
                  icon: "📈"
                },
                {
                  title: "Social Responsibility",
                  description: "Combining business success with meaningful community development and support",
                  icon: "💫"
                },
                {
                  title: "Environmental Care",
                  description: "Commitment to sustainable practices and eco-friendly materials for a greener future",
                  icon: "🌱"
                },
                {
                  title: "Local Empowerment",
                  description: "Creating employment opportunities and supporting local initiatives",
                  icon: "🏢"
                },
                {
                  title: "Innovation & Technology",
                  description: "Using QR codes and analytics for smart, data-driven distribution",
                  icon: "💡"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card"
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-teal-100">{feature.title}</h3>
                  <p className="text-teal-100/80 text-lg leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works py-20">
          <motion.div
            className="container"
            {...(isTest ? testConfig : {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.8 },
              viewport: { once: true, amount: 0.1 }
            })}
          >
            <h2 className="text-5xl font-bold text-center mb-16 text-teal-100">
              How We Work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: "Brands Sponsor Distribution",
                  description: "Partner with us to sponsor water distribution in high-traffic areas"
                },
                {
                  step: 2,
                  title: "Custom Branding",
                  description: "We print your brand message on premium water bottles"
                },
                {
                  step: 3,
                  title: "Strategic Distribution",
                  description: "Free water is distributed in carefully selected public locations"
                },
                {
                  step: 4,
                  title: "Maximize Impact",
                  description: "Gain visibility and build goodwill in the community"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="card"
                  {...(isTest ? testConfig : {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: index * 0.1 },
                    viewport: { once: true, amount: 0.1 }
                  })}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-300 text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-teal-100">{item.title}</h3>
                  <p className="text-teal-100/80 text-lg leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div className="stats-card" variants={statsVariants}>
                <h3 className="text-5xl font-bold mb-4 text-teal-100">10x</h3>
                <p className="text-teal-200/80 text-xl">More impressions than traditional advertising</p>
              </motion.div>

              <motion.div className="stats-card" variants={statsVariants}>
                <h3 className="text-5xl font-bold mb-4 text-teal-100">70%</h3>
                <p className="text-teal-200/80 text-xl">Lower cost per impression vs direct mail</p>
              </motion.div>

              <motion.div className="stats-card" variants={statsVariants}>
                <h3 className="text-5xl font-bold mb-4 text-teal-100">100%</h3>
                <p className="text-teal-200/80 text-xl">Positive brand association</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id="quotation" className="py-20">
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 text-teal-100">
                Get Your Custom Quote
              </h2>
              <p className="text-xl text-teal-100/80 text-center mb-12 leading-relaxed">
                Fill out the form below and we'll provide you with a detailed cost estimation for your water distribution campaign.
              </p>

              <motion.div
                className="glass-panel p-8 md:p-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <form className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-teal-100 mb-4">Personal Information</h3>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label" htmlFor="fullName">
                          Full Name*
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className="form-input"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="form-input"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="form-input"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="city">
                          City*
                        </label>
                        <input
                          type="text"
                          id="city"
                          className="form-input"
                          placeholder="Which city are you targeting?"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-teal-100 mb-4">Business Information</h3>
                    <div className="form-grid">
                      <div className="form-group">
                        <label className="form-label" htmlFor="companyName">
                          Company Name*
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          className="form-input"
                          placeholder="Enter company name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="businessType">
                          Type of Business*
                        </label>
                        <select
                          id="businessType"
                          className="form-select"
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-teal-100 mb-4">Campaign Information</h3>
                    <div className="space-y-6">
                      <div className="form-group">
                        <label className="form-label" htmlFor="advertiseContent">
                          What would you like to advertise?*
                        </label>
                        <textarea
                          id="advertiseContent"
                          rows={4}
                          className="form-textarea"
                          placeholder="Describe the product, service, or message you want on the bottles."
                        />
                      </div>

                      <div className="form-grid">
                        <div className="form-group">
                          <label className="form-label" htmlFor="quantity">
                            Quantity of Bottles*
                          </label>
                          <input
                            id="quantity"
                            type="number"
                            className="form-input"
                            min={1}
                            step={1}
                            placeholder="Enter the number of bottles you need"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label" htmlFor="budget">
                            Budget (₹)*
                          </label>
                          <input
                            id="budget"
                            type="number"
                            className="form-input"
                            min={1}
                            step={1}
                            placeholder="Enter your campaign budget in rupees"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4">
                    <button type="submit" className="btn-primary text-base md:text-lg px-8 py-4">
                      Submit Quote Request
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
