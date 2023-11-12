import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import App from './homeScreen.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <h2>Top News:</h2>
  </React.StrictMode>,
)
