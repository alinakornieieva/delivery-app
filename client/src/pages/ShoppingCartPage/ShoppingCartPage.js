import {useSelector} from 'react-redux'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Container, Col, Row } from "react-bootstrap"
import './ShoppingCartPage.scss'

export const ShoppingCartPage = () => {
    const {products} = useSelector(state => state.cart)
    return <Container className='selected-products'>
        <Row>
            <Col xs={12} md={6} xxl={6}>
                {products.map((product, i) => <div key={i}>
                    <div className='img-div'>
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="btn-section">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                        </svg>
                        <span>{product.amount}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/>
                        </svg>
                    </div>
                    <div className="price">{product.price * product.amount}$</div>
                </div>)}
            </Col>
            <Col xs={12} md={6} xxl={6}>
            <FloatingLabel
                label="Name"
                className="mb-3"
            >
                <Form.Control type="name"/>
            </FloatingLabel>
            <FloatingLabel
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email"/>
            </FloatingLabel>
            <FloatingLabel
                label="Phone"
                className="mb-3"
            >
                <Form.Control type="phone"/>
            </FloatingLabel>
            <FloatingLabel
                label="Address"
                className="mb-3"
            >
                <Form.Control type="address"/>
            </FloatingLabel>
            </Col>
        </Row>
        <button className='btn'>Submit</button>
    </Container>
}