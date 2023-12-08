import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Pages
import Home from './pages/public/Home.jsx' // LeadPage - Kock
import Sobre from './pages/public/Sobre.jsx' // AboutUsPage - Kock
import Contato from './pages/public/Contato.jsx'  // ContatosPage  - Kock
import ErrorPage from './pages/public/ErrorPage.jsx' // ErrorPage - Kock
import Login from './pages/public/Login.jsx'  //  LoginPage  - Kock
import ProdutoKock from './pages/private/Produto.jsx' //  ProdutoPage  - Kock
import Signup from './pages/public/Signup.jsx' //  SingupPage  - Kock


import BB from './pages/private/BB.jsx' // Loja - BB
import Crud from './pages/private/Menu_Private.jsx'// CrudPageDemo - BB
import Produto from './pages/private/Produto.jsx' // ProdutoLojaPage - BB


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
      path:"produto",
      element:<ProdutoKock/>
      
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
    },
    {
      path:"signup",
      element:<Signup/>
    }
  
]}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
