const router = require('express').Router()
const db = require('../models')

// GET route - /users/new
router.get('/new', (req, res) => {
    res.render("users/new")
})

// POST route - /users
router.post('/', (req, res) => {

})

module.exports = router