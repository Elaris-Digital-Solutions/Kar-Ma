import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Inicializar meta tags por defecto en el index.html
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
