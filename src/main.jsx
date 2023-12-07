import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Pages
import Home from './pages/public/home/Home.jsx' // LeadPage - Kock
import Sobre from './pages/public/sobre/Sobre.jsx' // AboutUsPage - Kock
import Contato from './pages/public/contato/Contato.jsx'  // ContatosPage  - Kock
import ErrorPage from './pages/public/error/ErrorPage.jsx' // ErrorPage - Kock
import Login from './pages/public/login/Login.jsx'  //  LoginPage  - Kock

import BB from './pages/private/loja/BB.jsx' // Loja - BB
import Crud from './pages/private/Crud/Menu_Private.jsx'// CrudPageDemo - BB
import Produto from './pages/private/produtos/Produto.jsx' // ProdutoLojaPage - BB


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
      path:"produtos",
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
    },
    {
      path:"produtos/:id",
      element:<Produto/>
    }
  ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
