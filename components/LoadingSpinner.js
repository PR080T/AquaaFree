import { motion } from 'framer-motion'

export function LoadingSpinner({ size = 'md' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <motion.div
      className={`${sizes[size]} border-4 border-blue-200 border-t-blue-600 
                  dark:border-gray-700 dark:border-t-blue-400 
                  rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear'
      }}
    />
  )
}

export function PageLoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 z-50">
      <LoadingSpinner size="lg" />
    </div>
  )
}