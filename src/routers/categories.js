const Category = require('../models/category')
const { Router } = require('express')
const Poetry = require('../models/poetry')

const router = Router()
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({})
        if (!categories)
            return res.status(500).send('No Data Found')
        res.status(200).json({ success: true, data: categories })
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const categories = await Category.findById(req.params.id)
        if (!categories)
            return res.status(500).send('No Data Found')
        res.status(200).json({ success: true, data: categories })
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
})

router.get('/:id/poetries', async (req, res) => {
    try {
        const poetries = await Poetry.find({"categoryId": req.params.id})
        if (!poetries)
            return res.status(500).send('No Data Found')
        res.status(200).json({ success: true, data: poetries })
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
})

router.get('/count', async(req, res) => {
    
    try {
        const totalCategories = await Category.countDocuments()
        res.status(200).json({count: totalCategories})
    } catch (error) {
        res.status(500).send(error)
    }
    
})

router.post('/', (req, res) => {
    const category = Category({
        name: req.body.name
    })
    category.save().then(createdCategory => {
        res.status(201).json(createdCategory)
    }).catch(e => {
        res.status(500).send(e)
    })
})
router.delete('/:id', (req, res)=>{
     Category.findByIdAndRemove(req.params.id).then(category=>{
        res.status(200).json(category)
     }).then(error=>{
        res.status(500).send(error)
     })
})
router.put('/:id', (req, res)=>{
    Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name       
    }).then(category=>{
        res.status(200).json(category)
    }).catch(e=>{
        res.status(500).send(e)
    })
})


module.exports = router