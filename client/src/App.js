import { Navbar } from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import { Homepage } from './pages/Homepage/Homepage'
import { ShoppingCartPage } from './pages/ShoppingCartPage/ShoppingCartPage'
import './App.scss'

const App = () => {
  return <>
    <Navbar/>
    <div className='app'>
      <Routes>
        <Route path='/' Component={Homepage}/>
        <Route path='/shopping-cart' Component={ShoppingCartPage}/>
      </Routes>
    </div>
  </>
}

export default App
