import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SubComponent from './components/SubComponent.jsx'

createRoot(document.getElementById('root')).render(
  <div className = "container">
    
    <h2>hI</h2>
    <SubComponent></SubComponent>
  </div>
)
