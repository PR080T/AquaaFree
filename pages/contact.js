import Link from 'next/link'
import Footer from '../components/Footer'

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
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-300 text-black rounded-full flex items-center justify-center font-bold">
                      AJ
                    </div>
                    <div>
                      <p className="font-semibold text-teal-100">Amogh Jain</p>
                      <p className="text-teal-100/70">Founder & CEO</p>
                    </div>
                  </div>
                </div>

                <div className="card-compact">
                  <h2 className="text-xl font-semibold mb-3 text-teal-100">Office Location</h2>
                  <p className="text-teal-100/80">
                    123 Business District<br />
                    City Center, State 12345
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card-compact space-y-4">
                  <h2 className="text-xl font-semibold text-teal-100">Contact Details</h2>
                  <div className="space-y-2 text-teal-100/80">
                    <p className="flex items-center gap-2">
                      <span>📞</span> (555) 123-4567
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📧</span> info@aquaafree.example
                    </p>
                    <p className="flex items-center gap-2">
                      <span>⏰</span> Mon-Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="card-compact space-y-4">
                  <h2 className="text-xl font-semibold text-teal-100">Connect With Us</h2>
                  <div className="flex flex-wrap gap-3">
                    <a 
                      href="https://instagram.com/aquaafree" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary px-4 py-2 flex items-center gap-2"
                    >
                      <span>📸</span> Instagram
                    </a>
                    <a 
                      href="https://linkedin.com/company/aquaafree" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary px-4 py-2 flex items-center gap-2"
                    >
                      <span>💼</span> LinkedIn
                    </a>
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