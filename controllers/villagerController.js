const router = require('express').Router()
const db = require('../models')
const axios = require('axios')

// GET villager index - /villager
router.get('/', async (req, res) => {
    try {
        const acnhURL = 'https://acnhapi.com/v1/villagers'
        const response = await axios.get(acnhURL)
        const villagers = response.data.ant00.name
        const name = Object.values(villagers)[0]
        // for in loop to grab (ant00) the objects
        console.log(name)
        res.render('./villagers', { name: name })
    } catch (error) {
        console.log(error)
    }
})



module.exports = router