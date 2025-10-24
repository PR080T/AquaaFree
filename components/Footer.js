import Link from 'next/link'
import { contactInfo } from '../config/contact'

export const getSocialIcon = (iconType, className = 'w-6 h-6') => {
  const icons = {
    instagram: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.264 2.242 1.326 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.351 2.633-1.326 3.608-.975.975-2.242 1.264-3.608 1.326-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.351-3.608-1.326-.975-.975-1.264-2.242-1.326-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608S5.8 2.395 7.166 2.333C8.432 2.275 8.812 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.428 3.635 1.395 2.668 2.362 2.37 3.535 2.312 4.812 2.253 6.092 2.24 6.501 2.24 12s.013 5.908.072 7.188c.059 1.277.356 2.45 1.323 3.417.967.967 2.14 1.264 3.417 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.356 3.417-1.323.967-.967 1.264-2.14 1.323-3.417.059-1.28.072-1.689.072-7.188s-.013-5.908-.072-7.188c-.059-1.277-.356-2.45-1.323-3.417C19.398.428 18.225.131 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0-2.881 1.44 1.44 0 0 0 0 2.881z"/>
      </svg>
    ),
    linkedin: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
    facebook: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
    twitter: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    )
  }
  return icons[iconType] || null
}

export default function Footer() {
  return (
    <footer className="site-footer py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-teal-100">About Aquaafree</h3>
            <p className="text-teal-200/80 leading-relaxed">
              Transforming brand visibility through sustainable water distribution.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="nav-link inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/quotation" className="nav-link inline-block">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="nav-link inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-100">Contact</h3>
            <div className="space-y-2 text-teal-200/80">
              <p>{contactInfo.officeLocation}</p>
              <p className="hover:text-teal-100 transition-colors">
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
              <p className="hover:text-teal-100 transition-colors">
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-teal-100">Follow Us</h3>
            <div className="flex space-x-4 text-teal-200/80">
              {Object.entries(contactInfo.social).map(([key, social]) => 
                social.url ? (
                  <a 
                    key={key}
                    href={social.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-100 transition-colors" 
                    aria-label={`Visit our ${social.label}`}
                  >
                    {getSocialIcon(social.icon)}
                  </a>
                ) : null
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-teal-900/60 text-center text-teal-300/80">
          <p>© {new Date().getFullYear()} Aquaafree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}