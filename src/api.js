const express  = require('express')
const serverless = require('serverless-http')
const app = express()
//const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//const categoryRouter = require('./routers/categories');
//const poetryRouter = require('./routers/poetries');


require('dotenv/config')

//middlewares
//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.json())

//routers
//app.use(`${process.env.API_BASE_URL}/categories`, categoryRouter)
//app.use(`${process.env.API_BASE_URL}/poetries`, poetryRouter)

//mongoose.set('strictQuery', false);
/*
app.listen(3000, ()=>{
    mongoose.connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName:'urdu_shayari'
    }).then(()=>{
        console.log('Database Connection Established and Server is running at http://localhost:3000/api/v1')
    }).catch(e=>{
        console.log(e)
    });
    
})*/



const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Database connected")
})

app.use(process.env.API_BASE_URL, router)

module.exports.handler = serverless(app)