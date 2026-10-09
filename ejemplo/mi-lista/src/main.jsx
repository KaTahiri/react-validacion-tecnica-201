import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TiendaProveedor } from './tienda'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TiendaProveedor>
      <App />
    </TiendaProveedor>
  </StrictMode>,
)