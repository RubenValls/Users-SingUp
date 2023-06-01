import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from './reducers/usersStore.tsx'
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css"; 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <ChakraProvider>
  <Provider store={store}> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  </ChakraProvider>
  </React.StrictMode>,
)
