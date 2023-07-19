const express = require('express');
const router = express.Router();
const Name = require('../models/nameModel')


router.get('/getAllName', async (req, res) => {
    try {
        const data = await Name.find({})
        res.status(200).send(data)
    }
    catch (error) {
        return res.status(400).json({ message: error });
    }
})

router.post('/postName', async (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ message: 'Please enter Name' })
    }
    Name.findOne({ name })
        .then(data => {
            if (data) {
                return res.status(400).json({ message: 'This name already exist in database' })
            }
            else {
                const newName = new Name({
                    name,
                })
                try {
                    newName.save();
                    return res.status(201).json({ message: 'Name Added successfully' })
                }
                catch (error) {
                    return res.status(400).json({ message: error })
                }
            }
        })
})

module.exports = router