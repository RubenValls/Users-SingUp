import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './reducers/usersStore.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ChakraProvider>
  <BrowserRouter>
  <Provider store={store}> 
    <App />
  </Provider>
  </BrowserRouter>
  </ChakraProvider>
  </React.StrictMode>,
)
