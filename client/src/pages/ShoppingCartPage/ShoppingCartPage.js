import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { Container, Col, Row } from "react-bootstrap"
import { addProduct, deleteProduct } from '../../redux/cartSlice'
import './ShoppingCartPage.scss'
import axios from '../../axios'

export const ShoppingCartPage = () => {
    const {totalPrice, products} = useSelector(state => state.cart)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const dispatch = useDispatch()
    const onSubmitClick = () => {
        try {
            axios.post('/order', {products, totalPrice, name, email, 
                phoneNumber: phone, address})
        } catch(e) {
            console.error(e)
            alert('Something went wrong')
        }
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
    }
    if (products.length < 1) {
        return <p className='no-selected'>No selected products in the shopping cart</p>
    }
    return <Container className='selected-products'>
        <Row>
            <Col xs={12} md={6} xxl={6}>
                {products.map((product, i) => <div key={i}>
                    <div className='img-div'>
                        <img src={product.img} alt={product.name} />
                    </div>
                    <p className='name'>{product.name}</p>
                    <div className='descr'>
                        <div className="btn-section">
                            <svg onClick={() => dispatch(addProduct(product))} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            <span>{product.amount}</span>
                            <svg  onClick={() => dispatch(deleteProduct(product))}xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                            </svg>
                        </div>
                        <div className="price">{product.price * product.amount}$</div>
                    </div>
                </div>)}
            </Col>
            <Col xs={12} md={6} xxl={6}>
            <FloatingLabel
                label="Name"
                className="mb-3"
            >
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="name"/>
            </FloatingLabel>
            <FloatingLabel
                label="Email address"
                className="mb-3"
            >
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email"/>
            </FloatingLabel>
            <FloatingLabel
                label="Phone"
                className="mb-3"
            >
                <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} type="phone"/>
            </FloatingLabel>
            <FloatingLabel
                label="Address"
                className="mb-3"
            >
                <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} type="address"/>
            </FloatingLabel>
            <p className='total'>Total price: {totalPrice}$</p>
            </Col>
        </Row>
        <div className='submit-btn'>
            <button onClick={onSubmitClick} className='btn'>Submit</button>
        </div>
    </Container>
}