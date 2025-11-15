/**
 * Sistema de SEO y Meta Tags dinámicos
 * Maneja meta tags por ruta para mejorar SEO y compartir en redes sociales
 */

export interface MetaTags {
  title: string;
  description: string;
  image?: string;
  path?: string;
  keywords?: string;
  author?: string;
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://karma.com.pe';
const DEFAULT_IMAGE = '/assets/kar-ma-logo.png';
const DEFAULT_AUTHOR = 'Kar & Ma S.A.C.';

/**
 * Actualiza los meta tags de la página
 */
export const setMetaTags = (tags: MetaTags): void => {
  if (typeof document === 'undefined') return;

  const {
    title,
    description,
    image = DEFAULT_IMAGE,
    path = '',
    keywords,
    author = DEFAULT_AUTHOR,
  } = tags;

  // Título de la página
  document.title = title;

  // Meta description
  updateOrCreateMetaTag('name', 'description', description);
  
  // Meta author
  updateOrCreateMetaTag('name', 'author', author);

  // Meta keywords (si se proporciona)
  if (keywords) {
    updateOrCreateMetaTag('name', 'keywords', keywords);
  }

  // Open Graph tags
  updateOrCreateMetaTag('property', 'og:title', title);
  updateOrCreateMetaTag('property', 'og:description', description);
  updateOrCreateMetaTag('property', 'og:type', 'website');
  updateOrCreateMetaTag('property', 'og:url', `${SITE_URL}${path}`);
  updateOrCreateMetaTag('property', 'og:image', `${SITE_URL}${image}`);
  updateOrCreateMetaTag('property', 'og:site_name', 'Kar & Ma S.A.C.');
  updateOrCreateMetaTag('property', 'og:locale', 'es_PE');

  // Twitter Card tags
  updateOrCreateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateOrCreateMetaTag('name', 'twitter:title', title);
  updateOrCreateMetaTag('name', 'twitter:description', description);
  updateOrCreateMetaTag('name', 'twitter:image', `${SITE_URL}${image}`);

  // Canonical URL
  updateOrCreateLinkTag('canonical', `${SITE_URL}${path}`);
};

/**
 * Actualiza o crea un meta tag
 */
const updateOrCreateMetaTag = (
  attribute: 'name' | 'property',
  value: string,
  content: string
): void => {
  let meta = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement;
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, value);
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
};

/**
 * Actualiza o crea un link tag
 */
const updateOrCreateLinkTag = (rel: string, href: string): void => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', href);
};

/**
 * Configuración de meta tags por ruta
 */
export const routeMetaTags: Record<string, MetaTags> = {
  '/': {
    title: 'Kar & Ma – Sal retail e industrial con tradición norteña',
    description: 'Consorcio peruano con 25 años de experiencia produciendo sal retail e industrial. Calidad garantizada, respaldada por la confianza del pueblo del norte del Perú.',
    path: '/',
    keywords: 'sal industrial, sal retail, sal peruana, Kar & Ma, salinas perú, sal de mesa, sal comercial',
    image: '/assets/hero-image.jpg',
  },
  '/productos': {
    title: 'Productos – Catálogo completo de sal retail e industrial | Kar & Ma',
    description: 'Amplia gama de productos de sal para diferentes necesidades industriales y de consumo. Sal industrial fina, extra fina, para pesca y productos comerciales de mesa.',
    path: '/productos',
    keywords: 'productos sal, sal industrial, sal comercial, sal de mesa, sal para pesca, sal yodada, catálogo productos',
    image: '/assets/products/SALINA SAL YODADA PARA MESA.jpg',
  },
  '/nosotros': {
    title: 'Nosotros – 25 años de experiencia en la industria salinera | Kar & Ma',
    description: 'Conoce nuestra historia, misión, visión y valores. Consorcio peruano con 25 años de trayectoria en la producción de sal de calidad para retail e industria.',
    path: '/nosotros',
    keywords: 'historia Kar & Ma, empresa salinera peruana, tradición norteña, misión visión valores',
    image: '/assets/hero-image.jpg',
  },
  '/submarcas': {
    title: 'Submarcas – Salina y Norteñita | Kar & Ma',
    description: 'Descubre nuestras submarcas: Salina, productos premium para retail y gastronomía; y Norteñita, sal tradicional con raíces norteñas para el hogar peruano.',
    path: '/submarcas',
    keywords: 'Salina, Norteñita, submarcas sal, marcas sal peruana, sal premium, sal tradicional',
    image: '/assets/kar-ma-logo.png',
  },
  '/segmentos': {
    title: 'Segmentos de Negocio – Comercial e Industrial | Kar & Ma',
    description: 'Dos líneas de negocio especializadas: productos comerciales de sal premium para consumidor final y soluciones industriales para procesos manufactureros.',
    path: '/segmentos',
    keywords: 'segmentos negocio, sal comercial, sal industrial, soluciones industriales, productos retail',
    image: '/assets/retail-products.jpg',
  },
  '/clientes': {
    title: 'Clientes y Partners – Confianza del mercado peruano | Kar & Ma',
    description: 'Empresas que confían en Kar & Ma para sus necesidades de sal retail e industrial. Calidad garantizada respaldada por años de experiencia.',
    path: '/clientes',
    keywords: 'clientes Kar & Ma, partners, empresas confianza, testimonios, casos de éxito',
    image: '/assets/hero-image.jpg',
  },
  '/cotizacion': {
    title: 'Cotización – Solicita tu cotización empresarial | Kar & Ma',
    description: 'Solicita una cotización personalizada para productos de sal retail e industrial. Respuesta en 24 horas con asesoría especializada para tu empresa.',
    path: '/cotizacion',
    keywords: 'cotización sal, presupuesto sal industrial, contacto Kar & Ma, solicitar cotización',
    image: '/assets/hero-image.jpg',
  },
};

/**
 * Hook para usar meta tags en componentes
 * Se debe llamar en useEffect cuando cambie la ruta
 */
export const useMetaTags = (path: string): void => {
  if (typeof window === 'undefined') return;

  const metaTags = routeMetaTags[path] || routeMetaTags['/'];
  setMetaTags(metaTags);
};

/**
 * Trackea la vista de página para analytics
 */
export const trackPageView = (path: string): void => {
  // Esta función será usada por el componente SEOHandler
  // El tracking real se maneja en analytics.ts a través de initGA
};

