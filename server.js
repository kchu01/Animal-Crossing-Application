// Required Modules and Variables
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const db = require('./models/index.js')
const cryptoJS = require('crypto-js')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')

const app = express()
const rowdyResults = rowdy.begin(app)
const PORT = process.env.PORT || 3000

// Middleware and config
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(cookieParser())

app.use(async (req, res, next) => {
    if (req.cookies.userId) {

        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.COOKIE_SECRET).toString(cryptoJS.enc.Utf8)
    
        const user = await db.user.findOne({
            where: {
                id: decryptedId
            }
        })
        res.locals.user = user
    } else {
        res.locals.user = null
    }
    next()
})

// Controllers
app.use('/users', require('./controllers/userController.js'))
app.use('/villagers', require('./controllers/villagerController.js'))
app.use('/items', require('./controllers/itemController'))

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/favorite', async (req, res) => {
    if (!res.locals.user) {
        res.redirect('/users/login')
    } else {
        try {
            const user = await db.user.findOne({
                where: { id: res.locals.user.id },
                include: [db.villager, db.item]
            })
            res.render('favorite.ejs', { villagers: user.villagers, items: user.items })
        } catch (err) {
            console.log(err)
        }
    }
})

app.listen(PORT, () => {
    rowdyResults.print()
})