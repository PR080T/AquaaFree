import Link from 'next/link'
import Footer from '../components/Footer'
import { contactInfo } from '../config/contact'

export default function Contact(){
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
            <Link href="/quotation" className="nav-link">Quotation</Link>
            <Link href="/contact" className="nav-link nav-link-active">Contact Us</Link>
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
            <Link href="/quotation" className="nav-link">Quotation</Link>
            <Link href="/contact" className="nav-link nav-link-active">Contact Us</Link>
          </div>
        </div>
      </header>

      <main className="container flex-1 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel p-10 md:p-14 space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-teal-100">Company Information</h1>
              <p className="text-teal-100/80 max-w-2xl mx-auto">
                Connect with our team, learn more about our leadership, and find the best way to reach us for partnerships or support.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="card-compact">
                  <h2 className="text-xl font-semibold mb-3 text-teal-100">About Our Company</h2>
                  <p className="text-teal-100/80">
                    Aquaafree Distribution Services specializes in innovative water distribution solutions 
                    that combine corporate social responsibility with effective brand promotion. We work with partners to deliver refreshment and recognition.
                  </p>
                </div>

                <div className="card-compact">
                  <h2 className="text-xl font-semibold mb-3 text-teal-100">Leadership</h2>
                  <div className="rounded-2xl bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border border-teal-800/50 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      <div className="flex-shrink-0 w-full md:w-auto flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 border-2 border-teal-400/50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-10 h-10 md:w-12 md:h-12 text-teal-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                          </svg>
                        </div>
                        <div className="md:mt-3">
                          <p className="text-lg md:text-xl font-semibold text-teal-50">Amogh Jain</p>
                          <p className="text-xs md:text-sm uppercase tracking-widest text-teal-300/80 font-medium mt-1">Founder & CEO</p>
                        </div>
                      </div>
                      <div className="flex-1 space-y-5">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <p className="text-[10px] md:text-xs uppercase tracking-wider text-teal-400/60 font-semibold">Experience</p>
                            <p className="text-sm md:text-base text-teal-100 mt-2">12+ Years</p>
                          </div>
                          <div>
                            <p className="text-[10px] md:text-xs uppercase tracking-wider text-teal-400/60 font-semibold">Focus</p>
                            <p className="text-sm md:text-base text-teal-100 mt-2">Sustainable Growth</p>
                          </div>
                        </div>
                        <div className="pt-3 border-t border-teal-800/50">
                          <p className="text-xs md:text-sm text-teal-200/90 flex items-start gap-2">
                            <span className="text-teal-400 mt-1 flex-shrink-0">✓</span>
                            <span>Leading with empathy, innovation, and purpose</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-compact">
                  <h2 className="text-xl font-semibold mb-3 text-teal-100">Office Location</h2>
                  <p className="text-teal-100/80">
                    {contactInfo.officeLocation}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card-compact space-y-4">
                  <h2 className="text-xl font-semibold text-teal-100">Contact Details</h2>
                  <div className="space-y-2 text-teal-100/80">
                    <p className="flex items-center gap-2">
                      <span>📞</span>
                      <a href={`tel:${contactInfo.phone}`} className="hover:text-teal-100 transition-colors">{contactInfo.phone}</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📧</span>
                      <a href={`mailto:${contactInfo.email}`} className="hover:text-teal-100 transition-colors">{contactInfo.email}</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>⏰</span> {contactInfo.businessHours}
                    </p>
                  </div>
                </div>

                <div className="card-compact space-y-4">
                  <h2 className="text-xl font-semibold text-teal-100">Connect With Us</h2>
                  <div className="flex flex-wrap gap-3">
                    {contactInfo.social.instagram.url && (
                      <a 
                        href={contactInfo.social.instagram.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary px-4 py-2 flex items-center gap-2"
                      >
                        <span>📸</span> {contactInfo.social.instagram.label}
                      </a>
                    )}
                    {contactInfo.social.linkedin.url && (
                      <a 
                        href={contactInfo.social.linkedin.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary px-4 py-2 flex items-center gap-2"
                      >
                        <span>💼</span> {contactInfo.social.linkedin.label}
                      </a>
                    )}
                    {contactInfo.social.facebook.url && (
                      <a 
                        href={contactInfo.social.facebook.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary px-4 py-2 flex items-center gap-2"
                      >
                        <span>👥</span> {contactInfo.social.facebook.label}
                      </a>
                    )}
                    {contactInfo.social.twitter.url && (
                      <a 
                        href={contactInfo.social.twitter.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary px-4 py-2 flex items-center gap-2"
                      >
                        <span>🐦</span> {contactInfo.social.twitter.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}