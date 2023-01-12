const Poetry = require('../models/poetry')
const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const poetries = await Poetry .find({})
        if (!poetries)
            return res.status(500).send('No Data Found')
        res.status(200).json({ success: true, data: poetries })
    } catch (error) {
        res.status(500).json({ success: false, error: error })
    }
})
router.get('/count', async(req, res) => {
    
    try {
        const totalPoetries = await Poetry.countDocuments()
        res.status(200).json({count: totalPoetries})
    } catch (error) {
        res.status(500).send(error)
    }
    
})

router.post('/', (req, res) => {
    const poetry = Poetry({
        categoryId:req.body.categoryId,
        sentences: req.body.sentences
    })
    poetry.save().then(createdPoetry => {
        res.status(201).json(createdPoetry)
    }).catch(e => {
        res.status(500).send(e)
    })
})
router.delete('/:id', (req, res)=>{
    Poetry.findByIdAndRemove(req.params.id).then(poetry=>{
        res.status(200).json(poetry)
     }).then(error=>{
        res.status(500).send(error)
     })
})
router.put('/:id', (req, res)=>{
    Poetry.findByIdAndUpdate(req.params.id, {
        name: req.body.name       
    }).then(poetry=>{
        res.status(200).json(poetry)
    }).catch(e=>{
        res.status(500).send(e)
    })
})


module.exports = router