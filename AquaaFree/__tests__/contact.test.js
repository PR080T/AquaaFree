import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from '@testing-library/react'
import Contact from '../pages/contact'
import { cleanupAnimations } from '../test/utils'

jest.useFakeTimers()

// Mock fetch for API calls
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ ok: true, id: 1 }),
  })
)

describe('Contact page', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.resetModules()
    jest.useFakeTimers('modern')
    fetch.mockClear()
  })

  afterEach(() => {
    cleanupAnimations()
  })

  it('renders contact form', () => {
    render(<Contact />)
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows validation errors for empty fields', async () => {
    render(<Contact />)
    const submitButton = screen.getByRole('button', { name: /submit/i })
    
    await act(async () => {
      fireEvent.click(submitButton)
      jest.runAllTimers()
    })

    await waitFor(() => {
      expect(screen.getByRole('textbox', { name: /name/i })).toBeRequired()
      expect(screen.getByRole('textbox', { name: /email/i })).toBeRequired()
      expect(screen.getByRole('textbox', { name: /message/i })).toBeRequired()
    })
  }, 10000)

  it('submits form successfully', async () => {
    render(<Contact />)
    
    await act(async () => {
      const nameInput = screen.getByRole('textbox', { name: /name/i })
      const emailInput = screen.getByRole('textbox', { name: /email/i })
      const messageInput = screen.getByRole('textbox', { name: /message/i })
      
      fireEvent.change(nameInput, { target: { value: 'Test User' } })
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
      fireEvent.change(messageInput, { target: { value: 'Test message' } })
      
      jest.runAllTimers()
    })
    
    await act(async () => {
      const submitButton = screen.getByRole('button', { name: /submit/i })
      fireEvent.click(submitButton)
      jest.runAllTimers()
    })
    
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1)
      expect(fetch).toHaveBeenCalledWith('/api/contact', expect.any(Object))
    })
    
    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument()
    })
  }, 10000)
})