import './App.scss'
import { Navbar } from './components/Navbar';
import {Routes, Route} from 'react-router-dom'
import { Homepage } from './pages/Homepage/Homepage';
import { ShoppingCartPage } from './pages/ShoppingCartPage/ShoppingCartPage';

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

export default App;
