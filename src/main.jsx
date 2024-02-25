import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ChakraProvider } from '@chakra-ui/provider'
import { store } from './Redux/Store.js'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ChakraProvider>
          <Provider store={store}>
          <App />
          </Provider> 
      </ChakraProvider>  
  </BrowserRouter>
        
)
