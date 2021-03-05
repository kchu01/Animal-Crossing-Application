// Required Modules and Variables
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const db = require('./models/index.js') //ADDED
const cryptoJS = require('crypto-js')
const cookieParser = require('cookie-parser')

const app = express()
const rowdyResults = rowdy.begin(app)
const PORT = process.env.PORT || 3000

// Middleware and config
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(async (req, res, next) => {
    // console.log(req.cookies)
    if (req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.COOKIE_SECRET).toString(cryptoJS.enc.Utf8)
        console.log(req.cookies.userId)
        console.log(process.env.COOKIE_SECRET)
        console.log(decryptedId);

        const user = await db.user.findOne({
            where: {
                id: decryptedId
            }
        })
        console.log(user)
        res.locals.user = user
    } else {
        res.locals.user = null
    }
    next()
})

// Controllers
app.use('/users', require('./controllers/userController.js'))
app.use('/villagers', require('./controllers/villagerController.js'))
app.use('/household_items', require('./controllers/household_itemController'))

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

// Favorites route
app.get('/favorites', (req, res) => {
    res.render('favorite')
})

app.get('/favorites', async (req, res) => {
    if (!res.locals.user) {
        res.redirect('/users/login')
    } else {
        try {
            const user = await db.user.findOne({
                where: { id: res.locals.user.id },
                include: db.villager
            })

            // console.log(user)
            res.render('villager/index', { villagers: user.dataValues.villagers })
        } catch (err) {
            console.log(err)
        }
    }
})

app.listen(PORT, () => {
    rowdyResults.print()
})