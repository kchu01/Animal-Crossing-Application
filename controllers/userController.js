const router = require('express').Router()
const db = require('../models')

// SIGN UP - GET route - /users/new 
router.get('/new', (req, res) => {
    res.render('users/new')
})

// CREATE NEW USER - POST route - /users 
router.post('/', async (req, res) => {
    try {
        const user = await db.user.create({
            username: req.body.username,
            password: req.body.password
        })
        res.cookie('userId', user.id)

        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
})

// LOGIN - GET route - /users/login 
router.get('/login', (req, res) => {
    res.redirect('users/profile')
})

// LOGIN - POST - user login pw -- NEED TO WORK ON
router.post('/login', async (req, res) => {
    const user = await db.user.findOne({
        where: { username: req.body.username }
    })
    res.render('index', { errors: "Invalid username/password" })
})

// PROFILE - GET 

// LOGOUT - GET route - /users/logout
router.get('/logout', (req, res) => {
    res.clearCookie('userId')
    res.redirect('/')
})

module.exports = router