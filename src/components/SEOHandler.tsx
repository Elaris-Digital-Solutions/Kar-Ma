import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMetaTags } from '@/lib/seo';
import { trackPageView } from '@/lib/analytics';

/**
 * Componente que maneja SEO y Analytics automáticamente basado en la ruta
 */
export const SEOHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Actualizar meta tags según la ruta
    useMetaTags(location.pathname);

    // Trackear vista de página
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
};

