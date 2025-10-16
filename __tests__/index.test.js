import { render, screen, within } from '@testing-library/react'
import Home from '../pages/index'
import { cleanupAnimations } from '../test/utils'

jest.useFakeTimers()

describe('Home page', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.resetModules()
    jest.useFakeTimers('modern')
  })

  afterEach(() => {
    cleanupAnimations()
  })
  it('renders hero section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/we distribute free drinking water/i)
  })

  it('shows navigation links in header', () => {
    render(<Home />)
    const header = screen.getByRole('banner')
    const nav = within(header).getByRole('navigation')
    expect(within(nav).getByRole('link', { name: /about us/i })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /quotation/i })).toBeInTheDocument()
    expect(within(nav).getByRole('link', { name: /contact us/i })).toBeInTheDocument()
  })

  it('displays "How We Work" section', () => {
    render(<Home />)
    expect(screen.getByText(/how we work/i)).toBeInTheDocument()
    expect(screen.getByText(/brands sponsor distribution/i)).toBeInTheDocument()
    expect(screen.getByText(/custom branding/i)).toBeInTheDocument()
    expect(screen.getByText(/strategic distribution/i)).toBeInTheDocument()
  })

  it('displays pricing table', () => {
    render(<Home />)
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText(/batch \(100 bottles\)/i)).toBeInTheDocument()
    expect(screen.getByText(/event promo \(500 bottles\)/i)).toBeInTheDocument()
  })

  it('displays statistics cards', () => {
    render(<Home />)
    expect(screen.getByText(/10x/i)).toBeInTheDocument()
    expect(screen.getByText(/70%/i)).toBeInTheDocument()
    expect(screen.getByText(/100%/i)).toBeInTheDocument()
  })
})