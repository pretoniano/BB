import './App.css'
import { Outlet } from 'react-router-dom'

/*Components*/
import Header from './components/Header'
import Promocao from './components/Promocao'

function App() {

  return (
    <>
     <Header/>
     <Promocao/>
     <Outlet/>
     // footer aqui
    </> 
  )
}

export default App


