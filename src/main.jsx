import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Page
import Home from './pages/public/Home.jsx'
import Sobre from './pages/public/Sobre.jsx'
import BB from './pages/private/BB.jsx'
import Contato from './pages/public/Contato.jsx'
import ErrorPage from './pages/public/ErrorPage.jsx'
import Crud from './pages/private/Menu_Private.jsx'
import Login from './pages/public/Login.jsx' 

// Config Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [{
      path:"/",
      element: <Home/>
    },
    {
      path:"b_b",
      element:<BB/>
    },
    {
      path:"sobre",
      element:<Sobre/>
      
    },
    {
      path:"menu",
      element:<Crud/>
    },
    {
      path:"contatos",
      element:<Contato/>
    }, 
    {
      path:"login",
      element:<Login/>
    }
  ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
