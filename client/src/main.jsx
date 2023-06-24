import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App'
import './index.css'

const theme = extendTheme({
  colors: {
    brand: {
      // 50: "#44337A",
      // 100: "#B794F4",
      500: "var(--darkBlue)",
    }
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>

)
