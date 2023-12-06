import './App.css'
import { Outlet } from 'react-router-dom'

/*Components*/
import Header from './components/header/Header'
/*Pages*/
import Home from './pages/public/Home'
import BB from './pages/private/BB'
import Sobre from './pages/public/Sobre';

function App() {

  return (
    <>
     <Header/>
     <Outlet/>
    </> 
  )
}

export default App


