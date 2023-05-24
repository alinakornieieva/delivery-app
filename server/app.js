const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Client = require('./models/Client')
const Order = require('./models/Order')
const Product = require('./models/Product')

const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000', 'https://delivery-app-g5z4.onrender.com']
}))

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch(e) {
        res.status(500).json({message: 'Something went wrong'})
    }
})

app.get('/products/:shop', async (req, res) => {
    try {
        const {shop} = req.params
        const products = await Product.find({shop})
        res.json(products)
    } catch(e) {
        res.status(500).json({message: 'Something went wrong'})
    }
})

app.get('/shops', async (req, res) => {
    try {
        let shops = []
        const products = await Product.find()
        products.forEach(({shop}) => {
            shops.push(shop)
        })
        shops = Array.from(new Set(shops))
        res.json(shops)
    } catch(e) {
        res.status(500).json({message: 'Something went wrong'})
    }
})

app.post('/create', async (req, res) => {
    try {
        const {shop, name, img, price} = req.body
        const product = await new Product({shop, name, img, price}) 
        await product.save()
        res.json({message: 'A product was added'})
    } catch(e) {
        res.status(500).json({message: 'Something went wrong'})
    }
})

app.post('/order', async (req, res) => {
    try {
        const {products, totalPrice, name,
        email, phoneNumber, address} = req.body
        const client = await new Client({name, email, phoneNumber, address})
        await client.save()
        const order = await new Order({client, products, totalPrice})
        await order.save()
        res.json({message: 'The order has been sent'})
    } catch(e) {
        console.log(e)
        res.status(500).json({message: 'Something went wrong'})
    }
})

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        app.listen(process.env.PORT || 5000, () => console.log(`Listening...`))
    } catch(e) {
        console.log(e)
    }
}

start()
