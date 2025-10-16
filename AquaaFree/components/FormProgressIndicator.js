import { motion } from 'framer-motion'

export function FormProgressIndicator({ currentStep, totalSteps, steps }) {
  return (
    <div className="w-full py-4">
      <div className="flex justify-between mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index <= currentStep ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
            }`}
          >
            <div className="relative">
              <motion.div
                initial={false}
                animate={{
                  scale: index === currentStep ? 1.2 : 1,
                  backgroundColor: index <= currentStep ? '#2563EB' : '#E5E7EB'
                }}
                className={`w-8 h-8 rounded-full flex items-center justify-center
                           text-sm font-medium mb-2 
                           ${
                             index <= currentStep
                               ? 'bg-blue-600 text-white'
                               : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                           }`}
              >
                {index + 1}
              </motion.div>
              {index < totalSteps - 1 && (
                <div
                  className={`absolute top-4 left-8 w-[calc(100%-2rem)] h-0.5 -z-10
                             ${
                               index < currentStep
                                 ? 'bg-blue-600 dark:bg-blue-400'
                                 : 'bg-gray-200 dark:bg-gray-700'
                             }`}
                />
              )}
            </div>
            <span className="text-sm mt-1">{step}</span>
          </div>
        ))}
      </div>
    </div>
  )
}