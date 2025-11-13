import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import EmailVersion from './EmailVersion'

// Use basename for GitHub Pages, but not for local development
const basename = import.meta.env.PROD ? '/phg-ai' : ''

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/email" element={<EmailVersion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
