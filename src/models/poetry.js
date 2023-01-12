const {Schema, model} = require('mongoose')

const poetrySchema = Schema({
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    sentences:[
        {type: String}
    ]
})
const poetry = model('Poetry', poetrySchema)
module.exports = poetry
