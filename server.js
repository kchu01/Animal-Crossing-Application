// Required Modules and Variables
require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const db = require('./models')
const cryptoJS = require('crypto-js')

const app = express()
const rowdyResults = rowdy.begin(app)
const PORT = process.env.PORT || 3000

// Middleware and config
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))

// Controllers
app.use('/users', require('./controllers/userController.js'))
app.use('/villagers', require('./controllers/villagerController.js'))
app.use('/household_items', require('./controllers/household_itemController'))

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

// saves cookie in userId ?
// app.use(async (req, res) => {
//     if (req.cookies.userId) {
//         const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.COOKIE_SECRET).toString(cryptoJS.enc.Utf8)

//         // console.log(decryptedId);
//         // await db.user.findByPk(decryptedId)
//         const user = await db.user.findOne({
//             where: {
//                 id: decryptedId
//             }
//         })

//         res.locals.user = user
//     } else {
//         res.locals.user = null
//     }
// })

app.listen(PORT, () => {
    rowdyResults.print()
})