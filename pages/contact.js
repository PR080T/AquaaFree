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
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500/50 via-cyan-400/40 to-emerald-500/50 shadow-[0_28px_75px_-35px_rgba(45,212,191,0.9)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.25),_rgba(15,118,110,0))]" />
                    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-teal-300/30" />
                    <div className="relative flex flex-col gap-6 px-7 py-8 md:flex-row md:items-center">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-[28px] bg-gradient-to-br from-emerald-300 via-teal-200 to-cyan-300 flex items-center justify-center text-black text-3xl font-extrabold shadow-[0_18px_45px_-25px_rgba(94,234,212,1)] ring-4 ring-teal-100/20">
                          AJ
                        </div>
                        <div className="absolute -top-2 -right-2 h-9 w-9 rounded-full border border-white/30 bg-teal-300/80 backdrop-blur-sm" />
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 text-[10px] uppercase tracking-[0.4em] text-teal-100/70">
                          Vision
                        </div>
                      </div>
                      <div className="flex-1 space-y-5 text-center md:text-left">
                        <div className="space-y-1">
                          <p className="text-2xl font-semibold text-teal-50">Amogh Jain</p>
                          <p className="text-xs uppercase tracking-[0.4em] text-teal-100/70">Founder & CEO</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-left text-xs text-teal-100/70">
                          <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-teal-100/50">Experience</p>
                            <p className="text-sm text-teal-50">12+ Years</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-[0.35em] text-teal-100/50">Focus</p>
                            <p className="text-sm text-teal-50">Sustainable Growth</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-left md:justify-start">
                          <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                          <p className="text-xs text-teal-100/80">Leading with empathy, innovation, and purpose</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-compact">
                  <h2 className="text-xl font-semibold mb-3 text-teal-100">Office Location</h2>
                  <p className="text-teal-100/80">
                    HIG colony , indore - 452011
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="card-compact space-y-4">
                  <h2 className="text-xl font-semibold text-teal-100">Contact Details</h2>
                  <div className="space-y-2 text-teal-100/80">
                    <p className="flex items-center gap-2">
                      <span>📞</span> 9238710077
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
                      href="https://www.instagram.com/aquaafree?igsh=eG5kbzZwMTZ3bm0=" 
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