import Head from 'next/head'
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'

export default function About() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)

  const features = [
    {
      title: "QR Code Integration",
      description: "Scan and learn more about our sustainable water distribution initiative and your brand's impact",
      icon: "📱"
    },
    {
      title: "Maximum Reach",
      description: "Strategic distribution in high-traffic areas ensures your brand reaches thousands daily",
      icon: "📈"
    },
    {
      title: "Cost-Effective Advertising",
      description: "Lower cost per impression compared to traditional advertising methods",
      icon: "💰"
    },
    {
      title: "Eco-Friendly Impact",
      description: "Sustainable practices and recyclable materials align with modern environmental values",
      icon: "🌱"
    },
    {
      title: "Brand Trust Building",
      description: "Associate your brand with community welfare and social responsibility",
      icon: "🤝"
    },
    {
      title: "Data-Driven Insights",
      description: "Detailed analytics on distribution patterns and consumer engagement",
      icon: "📊"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-teal-950 to-black text-teal-100">
      <Head>
        <title>About Us - Aquaafree</title>
        <meta name="description" content="Learn about Aquaafree's innovative water distribution and brand visibility solutions" />
      </Head>

      <header role="banner" className="site-header">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Link href="/">Aquaafree</Link>
          </div>
          <nav role="navigation" className="desktop-nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link nav-link-active">About Us</Link>
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
            onClick={() => setMobileNavOpen(value => !value)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div id="mobile-nav-panel" className={`mobile-nav-panel${isMobileNavOpen ? ' mobile-nav-panel-open' : ' hidden'}`}>
          <div className="container space-y-2 py-3">
            <Link href="/" className="nav-link" onClick={() => setMobileNavOpen(false)}>Home</Link>
            <Link href="/about" className="nav-link nav-link-active" onClick={() => setMobileNavOpen(false)}>About Us</Link>
            <Link href="/#how-it-works" className="nav-link" onClick={() => setMobileNavOpen(false)}>How We Work</Link>
            <Link href="/quotation" className="nav-link" onClick={() => setMobileNavOpen(false)}>Quotation</Link>
            <Link href="/contact" className="nav-link" onClick={() => setMobileNavOpen(false)}>Contact Us</Link>
          </div>
        </div>
      </header>

      <main className="container flex-1 py-16">
        <section className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-surface p-10 md:p-14"
          >
            <h1 className="text-4xl font-bold mb-6 text-teal-100">Revolutionizing Brand Visibility</h1>
            <p className="text-xl text-teal-100/80 mb-4">
              At Aquaafree, we bridge the gap between impactful marketing and community welfare.
              Our innovative approach transforms water distribution into a powerful branding opportunity.
            </p>
            <p className="text-lg text-teal-100/70">
              By delivering clean drinking water with your brand presence, we help create lasting goodwill while amplifying your reach.
            </p>
          </motion.div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-teal-100">{feature.title}</h3>
                <p className="text-teal-100/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="glass-panel p-10 md:p-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl font-bold text-teal-100">Why Choose Aquaafree?</h2>
            <p className="text-lg text-teal-100/80">
              Our platform offers an innovative solution that combines corporate social responsibility 
              with effective brand promotion. Through strategic water distribution, we help your brand 
              make a lasting impression while contributing to community welfare.
            </p>
            <Link 
              href="/quotation"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Started Today
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
