// Required Modules and Variables
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')

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

// Routes
app.get('/', (req, res) => {
    res.render('index')
})


app.listen(PORT, () => {
    rowdyResults.print()
})