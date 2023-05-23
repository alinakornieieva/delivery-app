const {Schema, model, Types} = require('mongoose')

const schema = Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    address: {type: String, required: true},
    order: {type: Types.ObjectId, ref: 'Order'}
})

module.exports = model('Client', schema)