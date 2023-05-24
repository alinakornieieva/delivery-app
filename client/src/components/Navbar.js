import {NavLink} from 'react-router-dom'
import './Navbar.scss'

export const Navbar = () => {
    return <div className='navbar-comp'>
        <NavLink to='/'>Shop</NavLink>
        <NavLink to='/shopping-cart'>Shopping Cart</NavLink>
    </div>
}