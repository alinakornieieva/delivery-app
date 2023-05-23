import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts, fetchShop, fetchShops } from '../redux/homeSlice'
import { addProduct } from '../redux/cartSlice'

export const Homepage = () => {
    const dispatch = useDispatch()
    const {products, shops, productsStatus, shopsStatus} = useSelector(state => state.shop)
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchShops())
    }, [])
    const onFilterClick = (shop) => {
        if (shop === 'all') {
            dispatch(fetchProducts())
        } else {
            dispatch(fetchShop(shop))
        }
    }
    return <div>
        {shopsStatus === 'idle' && <p onClick={() => onFilterClick('all')}>All</p>}
        {shopsStatus === 'idle' && shops.map((shop, i) => <div key={i}>
            <p onClick={() => onFilterClick(shop)}>{shop}</p>
        </div>)}
        {productsStatus === 'idle' && products.map(product => <div key={product._id}>
            <img style={{maxWidth: '300px'}} src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}$</p>
            <button onClick={() => dispatch(addProduct(product))} 
            className='btn'>Add to cart</button>
        </div>)}
    </div>
}