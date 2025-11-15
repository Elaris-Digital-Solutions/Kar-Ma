# Configuración de Google Analytics

## Instrucciones de Configuración

### 1. Obtener el Measurement ID de Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una nueva propiedad o selecciona una existente
3. Ve a **Administración** > **Flujos de datos**
4. Crea un nuevo flujo de datos para **Web**
5. Copia el **Measurement ID** (formato: `G-GZWQVXPC27`)

### 2. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```env
VITE_GA_MEASUREMENT_ID=G-GZWQVXPC27
VITE_SITE_URL=https://kar-ma.vercel.app
```

**Nota:** Para desarrollo local, puedes usar:
```env
VITE_GA_MEASUREMENT_ID=G-GZWQVXPC27
VITE_SITE_URL=http://localhost:5173
```

### 3. Verificar que funciona

1. Inicia el servidor de desarrollo: `npm run dev`
2. Abre la consola del navegador
3. Deberías ver el mensaje: `Google Analytics inicializado: G-XXXXXXXXXX`
4. Navega por la aplicación y verifica que los eventos se registren en Google Analytics

## Eventos Rastreados

El sistema automáticamente rastrea:

- **Vistas de página**: Cada cambio de ruta actualiza la vista de página
- **Clicks en WhatsApp**: Cuando se hace clic en cualquier botón de WhatsApp
- **Envío de formulario de contacto**: Cuando se envía el formulario de contacto
- **Solicitud de cotización**: Cuando se hace clic en "Solicitar cotización"

## Uso Manual

Si necesitas trackear eventos personalizados:

```typescript
import { trackEvent } from '@/lib/analytics';

// Trackear un evento personalizado
trackEvent('click', 'button', 'nombre_del_boton');
```

## Troubleshooting

### Google Analytics no se inicializa

- Verifica que `VITE_GA_MEASUREMENT_ID` esté configurado correctamente
- Revisa la consola del navegador por errores
- Asegúrate de que el archivo `.env.local` esté en la raíz del proyecto

### Los eventos no aparecen en Google Analytics

- Los eventos pueden tardar 24-48 horas en aparecer en los reportes
- Usa Google Analytics Debugger para ver eventos en tiempo real
- Verifica que el Measurement ID sea correcto

