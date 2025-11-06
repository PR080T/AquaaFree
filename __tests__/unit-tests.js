import { render, screen } from '@testing-library/react'
import { getAdminTemplate, getAutoReplyTemplate } from '../lib/send-mail'
import { getSocialIcon } from '../components/Footer'
import { LoadingSpinner, PageLoadingSpinner } from '../components/LoadingSpinner'
import { FormProgressIndicator } from '../components/FormProgressIndicator'
import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'
import { ThemeProvider } from '../lib/theme-context'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, animate, transition, initial, whileHover, whileTap, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, animate, transition, initial, whileHover, whileTap, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock Next.js Link component
jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href}>{children}</a>
})

// Mock the contact config
jest.mock('../config/contact', () => ({
  contactInfo: {
    officeLocation: 'Test Location',
    email: 'test@example.com',
    phone: '123-456-7890',
    social: {
      instagram: { url: 'https://instagram.com/test', label: 'Instagram', icon: 'instagram' },
      linkedin: { url: 'https://linkedin.com/test', label: 'LinkedIn', icon: 'linkedin' },
    }
  }
}))

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false, // default to light mode
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('Utility Functions', () => {
  describe('send-mail functions', () => {
    test('getAdminTemplate returns correct structure', () => {
      const result = getAdminTemplate({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello World'
      })

      expect(result).toHaveProperty('subject', 'New contact from John Doe')
      expect(result).toHaveProperty('html')
      expect(result).toHaveProperty('text')
      expect(result.html).toContain('John Doe')
      expect(result.html).toContain('john@example.com')
      expect(result.html).toContain('Hello World')
      expect(result.text).toContain('John Doe')
      expect(result.text).toContain('john@example.com')
      expect(result.text).toContain('Hello World')
    })

    test('getAutoReplyTemplate returns correct structure', () => {
      const result = getAutoReplyTemplate({
        name: 'Jane Smith'
      })

      expect(result).toHaveProperty('subject', 'Thanks for contacting Aquaafree')
      expect(result).toHaveProperty('html')
      expect(result).toHaveProperty('text')
      expect(result.html).toContain('Jane Smith')
      expect(result.text).toContain('Jane Smith')
    })

    test('getAdminTemplate handles newlines in message', () => {
      const result = getAdminTemplate({
        name: 'Test',
        email: 'test@example.com',
        message: 'Line 1\nLine 2'
      })

      expect(result.html).toContain('<br>')
      expect(result.html).toContain('Line 1')
      expect(result.html).toContain('Line 2')
    })
  })

  describe('Footer getSocialIcon function', () => {
    test('returns Instagram icon for instagram type', () => {
      const icon = getSocialIcon('instagram')
      expect(icon).toBeTruthy()
      expect(icon.type).toBe('svg')
    })

    test('returns LinkedIn icon for linkedin type', () => {
      const icon = getSocialIcon('linkedin')
      expect(icon).toBeTruthy()
      expect(icon.type).toBe('svg')
    })

    test('returns Facebook icon for facebook type', () => {
      const icon = getSocialIcon('facebook')
      expect(icon).toBeTruthy()
      expect(icon.type).toBe('svg')
    })

    test('returns Twitter icon for twitter type', () => {
      const icon = getSocialIcon('twitter')
      expect(icon).toBeTruthy()
      expect(icon.type).toBe('svg')
    })

    test('returns null for unknown type', () => {
      const icon = getSocialIcon('unknown')
      expect(icon).toBeNull()
    })

    test('applies custom className', () => {
      const icon = getSocialIcon('instagram', 'custom-class')
      expect(icon.props.className).toBe('custom-class')
    })
  })
})

describe('React Components', () => {
  describe('LoadingSpinner', () => {
    test('renders with default medium size', () => {
      render(<LoadingSpinner />)
      const spinner = document.querySelector('.rounded-full')
      expect(spinner).toHaveClass('w-8', 'h-8') // md size
    })

    test('renders with small size', () => {
      render(<LoadingSpinner size="sm" />)
      const spinner = document.querySelector('.rounded-full')
      expect(spinner).toHaveClass('w-4', 'h-4')
    })

    test('renders with large size', () => {
      render(<LoadingSpinner size="lg" />)
      const spinner = document.querySelector('.rounded-full')
      expect(spinner).toHaveClass('w-12', 'h-12')
    })
  })

  describe('PageLoadingSpinner', () => {
    test('renders with overlay and large spinner', () => {
      render(<PageLoadingSpinner />)
      const overlay = document.querySelector('.fixed.inset-0')
      expect(overlay).toHaveClass('fixed', 'inset-0', 'flex', 'items-center', 'justify-center')
      // Should contain LoadingSpinner with lg size
      const spinner = document.querySelector('.rounded-full')
      expect(spinner).toHaveClass('w-12', 'h-12')
    })
  })

  describe('FormProgressIndicator', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3']

    test('renders all steps', () => {
      render(<FormProgressIndicator currentStep={0} totalSteps={3} steps={steps} />)
      expect(screen.getByText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Step 2')).toBeInTheDocument()
      expect(screen.getByText('Step 3')).toBeInTheDocument()
    })

    test('highlights current step', () => {
      render(<FormProgressIndicator currentStep={1} totalSteps={3} steps={steps} />)
      const stepNumbers = document.querySelectorAll('.flex.items-center.justify-center')
      expect(stepNumbers).toHaveLength(3)
      // Check that step 2 is highlighted (currentStep=1, so index 1)
      expect(stepNumbers[0]).toHaveClass('bg-blue-600', 'text-white')
      expect(stepNumbers[1]).toHaveClass('bg-blue-600', 'text-white')
      expect(stepNumbers[2]).toHaveClass('bg-gray-200')
    })

    test('shows step numbers correctly', () => {
      render(<FormProgressIndicator currentStep={0} totalSteps={3} steps={steps} />)
      const stepNumbers = document.querySelectorAll('.flex.items-center.justify-center')
      expect(stepNumbers).toHaveLength(3)
      expect(stepNumbers[0]).toHaveTextContent('1')
      expect(stepNumbers[1]).toHaveTextContent('2')
      expect(stepNumbers[2]).toHaveTextContent('3')
    })
  })

  describe('ThemeToggle', () => {
    test('renders toggle button', () => {
      render(
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label')
    })

    test('displays sun icon when in light mode', () => {
      // Ensure light mode
      window.matchMedia.mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))

      render(
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label', 'Switch to dark mode')
    })

    test('displays moon icon when in dark mode', () => {
      // Mock matchMedia to simulate dark mode
      window.matchMedia.mockImplementation(query => ({
        matches: query === '(prefers-color-scheme: dark)',
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))

      render(
        <ThemeProvider>
          <ThemeToggle />
        </ThemeProvider>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-label', 'Switch to light mode')
    })
  })

  describe('Footer', () => {
    test('renders footer content', () => {
      render(<Footer />)
      expect(screen.getByText('About Aquaafree')).toBeInTheDocument()
      expect(screen.getByText('Quick Links')).toBeInTheDocument()
      expect(screen.getByRole('heading', { name: /contact/i, level: 3 })).toBeInTheDocument()
      expect(screen.getByText('Follow Us')).toBeInTheDocument()
    })

    test('renders social media links', () => {
      render(<Footer />)
      const links = screen.getAllByRole('link')
      expect(links.length).toBeGreaterThan(0)
      // Check for social links
      expect(screen.getByLabelText('Visit our Instagram')).toBeInTheDocument()
      expect(screen.getByLabelText('Visit our LinkedIn')).toBeInTheDocument()
    })

    test('renders contact information', () => {
      render(<Footer />)
      expect(screen.getByText('Test Location')).toBeInTheDocument()
      expect(screen.getByText('test@example.com')).toBeInTheDocument()
      expect(screen.getByText('123-456-7890')).toBeInTheDocument()
    })

    test('renders copyright notice', () => {
      render(<Footer />)
      expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Aquaafree`))).toBeInTheDocument()
    })
  })
})