const {Schema, model, Types} = require('mongoose')

const schema = Schema({
    items: [{type: Types.ObjectId, ref: 'OrderItem'}],
    client: {type: Types.ObjectId, ref: 'Client'}
})

module.exports = model('Order', schema)