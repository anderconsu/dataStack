import React from '../dataStack/node_modules/@types/react/index.js'
import ReactDOM from '../dataStack/node_modules/@types/react-dom/client.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
