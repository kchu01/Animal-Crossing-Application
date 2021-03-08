const router = require('express').Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const AES = require('crypto-js/aes')

// SIGN UP - GET route - /users/new 
router.get('/new', (req, res) => {
    res.render('users/new')
})

// CREATE NEW USER - POST route - /users 
router.post('/', async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12)

    try {
        if (!req.body.username || !req.body.password) {
            res.render('users/new', { errors: 'Invalid username/password' })
            return;
        }
        const user = await db.user.create({
            username: req.body.username,
            password: hashedPassword
        })
        const encryptedId = AES.encrypt(user.id.toString(), process.env.COOKIE_SECRET).toString()
        res.cookie('userId', encryptedId)
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.render('users/new', { errors: 'Error creating user, try again w/ different name?' })
    }
})

// LOGIN - GET route - /users/login 
router.get('/login', (req, res) => {
    res.render('users/login')
})

// LOGIN - POST
router.post('/login', async (req, res) => {
    try {
        const user = await db.user.findOne({
            where: { username: req.body.username }
        })
        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const encryptedId = AES.encrypt(user.id.toString(), process.env.COOKIE_SECRET).toString()
            res.cookie('userId', encryptedId)
            res.redirect('/')
        } else {
            res.render("users/login", { errors: "Invalid email/password" })
        }

    } catch (err) {
        console.log(err)
        res.render('users/login', { errors: "Invalid email/password" })
    }
})

// PROFILE - GET  
router.get('/profile', (req, res) => {
    res.render('users/profile', { user: req.user })
})

// LOGOUT - GET route - /users/logout
router.get('/logout', (req, res) => {
    res.clearCookie('userId')
    res.redirect('/')
})

module.exports = router