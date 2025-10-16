export const testConfig = {
  initial: false,
  animate: false
}

export const cleanupAnimations = () => {
  // Clear any pending animation frames
  const raf = global.requestAnimationFrame
  if (raf) {
    jest.spyOn(global, 'requestAnimationFrame').mockImplementation(cb => {
      const timeoutId = setTimeout(cb, 0)
      timeoutId.unref && timeoutId.unref()
      return timeoutId
    })
    jest.spyOn(global, 'cancelAnimationFrame').mockImplementation(id => clearTimeout(id))
  }
  
  // Clear any pending timers
  jest.runAllTimers()
  
  // Restore real timers
  jest.useRealTimers()
  
  // Clear all mocks
  jest.clearAllMocks()
}