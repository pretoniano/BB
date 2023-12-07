import './App.css'
import { Outlet } from 'react-router-dom'

/*Components*/
import Header from './components/header/Header'

function App() {

  return (
    <>
     <Header/>
     <Outlet/>
     // footer aqui
    </> 
  )
}

export default App


