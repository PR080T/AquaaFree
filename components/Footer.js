import Link from 'next/link'
import { contactInfo } from '../config/contact'

export default function Footer() {
  const getSocialIcon = (iconType) => {
    const icons = {
      instagram: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
        </svg>
      ),
      linkedin: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      ),
      facebook: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
        </svg>
      )
    }
    return icons[iconType] || null
  }

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