import '../styles/globals.css'
import '../styles/forms.css'

import { ThemeProvider } from '../lib/theme-context'
import { ToastProvider } from '../lib/toast-context'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PageLoadingSpinner } from '../components/LoadingSpinner'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleComplete = () => setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <ThemeProvider>
      <ToastProvider>
        <AnimatePresence mode="wait">
          {loading && <PageLoadingSpinner />}
          <Component {...pageProps} />
        </AnimatePresence>
      </ToastProvider>
    </ThemeProvider>
  )
}
