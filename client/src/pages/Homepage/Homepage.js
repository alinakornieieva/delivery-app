import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchProducts, fetchShop, fetchShops } from '../../redux/homeSlice'
import { addProduct } from '../../redux/cartSlice'
import { Container, Col, Row } from "react-bootstrap"
import { Loader } from '../../components/Loader/Loader'
import './Homepage.scss'

export const Homepage = () => {
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('all')
    const [shopVariant, setShopVariant] = useState(null)
    const {products, shops, productsStatus, shopsStatus} = useSelector(state => state.shop)
    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchShops())
    }, [])
    const onFilterClick = (shop) => {
        setFilter(shop)
        if (shop === 'all') {
            dispatch(fetchProducts())
        } else {
            dispatch(fetchShop(shop))
        }
    }
    const onAddBtnClick = (product) => {
        dispatch(addProduct(product))
        setShopVariant(product.shop)
    }
    if (productsStatus === 'error' || shopsStatus === 'error') {
        return <p className='error'>Something went wrong...</p>
    }
    if (productsStatus === 'loading' || shopsStatus === 'loading') {
        return <Loader/>
    }
    return <div className='homepage'>
        {shopsStatus === 'idle' && <div className='btns'>
                <button className={filter === 'all' ? 'active' : 'btn'} onClick={() => onFilterClick('all')}>All</button>
                {shops.map((shop, i) => <div key={i}>
                <button className={filter === shop ? 'active' : 'btn'} onClick={() => onFilterClick(shop)}>{shop}</button>
            </div>)}
        </div>}
        <Container>
            <Row>
                {productsStatus === 'idle' && products.map(product => <Col className='card-item' key={product._id}
                    xs={12} md={6} lg={4} xxl={3}
                    >
                    <div className='img-div'>
                        <img src={product.img} alt={product.name} />
                    </div>
                    <p className='name'>{product.name}</p>
                    <div className='descr'>
                        <p className='price'>{product.price}$</p>
                        <button disabled={shopVariant && shopVariant !== product.shop}
                        onClick={() => onAddBtnClick(product)} 
                        className='btn'>Add to cart</button>
                    </div>
                </Col>)}
            </Row>
        </Container>
    </div>
}