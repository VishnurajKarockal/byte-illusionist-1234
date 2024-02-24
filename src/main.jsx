import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
</Provider>
======
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
    
>>>>>>> cae2ab4e0cd345bc8676078afaff72ddcd8c6bf0
  
)
