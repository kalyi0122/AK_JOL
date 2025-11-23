import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Wish from './wish/Wish.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Wish />
  </StrictMode>,
)
