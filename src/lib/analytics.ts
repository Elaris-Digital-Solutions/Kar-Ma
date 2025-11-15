/**
 * Sistema de Google Analytics
 * Maneja el tracking de eventos (GA ya está inicializado en index.html)
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_MEASUREMENT_ID = 'G-GZWQVXPC27';

/**
 * Verifica que Google Analytics esté disponible
 */
export const initGA = (): void => {
  if (typeof window === 'undefined') return;
  
  if (!window.gtag) {
    console.warn('Google Analytics: gtag no está disponible. Asegúrate de que el script esté en index.html');
    return;
  }

  console.log('Google Analytics: Listo para trackear eventos');
};

/**
 * Trackea un evento personalizado
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Trackea navegación de página
 */
export const trackPageView = (path: string): void => {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

/**
 * Trackea eventos comunes de la aplicación
 */
export const trackWhatsAppClick = (): void => {
  trackEvent('click', 'whatsapp', 'WhatsApp button clicked');
};

export const trackProductView = (productName: string): void => {
  trackEvent('view', 'product', productName);
};

export const trackContactFormSubmit = (): void => {
  trackEvent('submit', 'form', 'contact_form');
};

export const trackQuoteRequest = (): void => {
  trackEvent('click', 'quote', 'quote_request_button');
};

export const trackProductFilter = (category: string): void => {
  trackEvent('filter', 'product', category);
};

