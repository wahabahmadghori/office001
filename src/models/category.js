const {Schema, model} = require('mongoose')

const categorySchema = Schema({
    name:{
        type: String,
        required: true
    },
    createdDate:{
        type: Date, 
        default: Date.now
    }
})
module.exports = model('Category', categorySchema )