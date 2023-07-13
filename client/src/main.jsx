import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App'

const theme = extendTheme({
  colors: {
    brand: {
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
