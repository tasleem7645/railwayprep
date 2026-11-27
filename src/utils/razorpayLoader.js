// Lazy idempotent loader for Razorpay Standard Checkout SDK
let checkoutPromise = null;

export function loadRazorpayCheckout() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Window unavailable'));
  }

  if (window.Razorpay) {
    return Promise.resolve(window.Razorpay);
  }

  if (checkoutPromise) {
    return checkoutPromise;
  }

  checkoutPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.Razorpay), { once: true });
      existing.addEventListener('error', () => {
        checkoutPromise = null;
        reject(new Error('Failed to load Razorpay Checkout SDK'));
      }, { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => {
      if (window.Razorpay) {
        resolve(window.Razorpay);
      } else {
        checkoutPromise = null;
        reject(new Error('Razorpay script loaded but global object unavailable'));
      }
    };
    script.onerror = () => {
      checkoutPromise = null;
      reject(new Error('Unable to load Razorpay Checkout. Check internet connection.'));
    };
    document.body.appendChild(script);
  });

  return checkoutPromise;
}
