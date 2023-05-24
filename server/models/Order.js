const {Schema, model, Types} = require('mongoose')

const schema = Schema({
    products: [{type: Types.ObjectId, ref: 'OrderItem'}],
    totalPrice: {type: Number, required: true},
    client: {type: Types.ObjectId, ref: 'Client'}
})

module.exports = model('Order', schema)