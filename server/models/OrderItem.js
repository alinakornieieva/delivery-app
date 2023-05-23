const {Schema, model, Types} = require('mongoose')

const schema = Schema({
    shop: {type: String, required: true},
    name: {type: String, required: true},
    img: {type: String, required: true},
    price: {type: Number, required: true},
    amount: {type: Number, required: true}
})

module.exports = model('OrderItem', schema)