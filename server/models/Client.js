const {Schema, model} = require('mongoose')

const schema = Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    address: {type: String, required: true},
})

module.exports = model('Client', schema)