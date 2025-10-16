import '@testing-library/jest-dom'

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock requestAnimationFrame and cancelAnimationFrame
global.requestAnimationFrame = (callback) => {
  const timeoutId = setTimeout(() => callback(Date.now()), 0);
  timeoutId.unref && timeoutId.unref();
  return timeoutId;
};

global.cancelAnimationFrame = (id) => {
  clearTimeout(id);
};

// Increase test timeout
jest.setTimeout(10000);

// Cleanup after each test
afterEach(() => {
  jest.useRealTimers();
  jest.clearAllMocks();
  jest.clearAllTimers();
});