const router = require('express').Router()
const db = require('../models')
const axios = require('axios')

// GET household_items index - /household_items - get data from api
router.get('/', async (req, res) => {
    try {
        const householdItemsUrl = 'https://acnhapi.com/v1/houseware/'
        const responce = await axios.get(householdItemsUrl)

        const items = []

        for (const item in responce.data) {
            const householdItemArray = responce.data[item]
            const itemArray = householdItemArray[0]
            const name = itemArray.name['name-USen']
            let householdData = {
                name: name,
                id: itemArray['internal-id'],
                imageUrl: itemArray.image_uri 
            }
            items.push(householdData)
        }
        items.splice(10, items.length)
        // console.log(householdItems[0].name.split(" ").join("_"), '👀👀👀🐱‍🚀🐱‍🚀👀🐱‍🚀👀')
        res.render('./items', { items: items })
    } catch (error) {
        console.log(error)
    }
})

// GET Item/:id - Show details on one
router.get('/:name', async (req, res) => {
    try {
        const acnhUrl = `https://acnhapi.com/v1/houseware/${req.params.name}`
        const response = await axios.get(acnhUrl)
        const item = response.data

        res.render('./items/show', { item: item })
    } catch (error) {
        console.log(error)
    }
})

// POST route - favorites
router.post('/', async (req, res) => {
    try {
        const [newItem, created] = await db.item.findOrCreate({
            where: { name: req.body.name }
        })
        // console.log(newHouseholdItem) //works
        res.locals.user.addItem(newItem)
        res.redirect('/favorite')
    } catch(error) {
        console.log(error)
        res.redirect('/')
    }
})

// delete route
router.delete('/:id', async (req, res) => {
    try {
        const item = await db.item.findByPk(req.params.id)
        console.log(item)
        res.locals.user.removeItem(item)
        res.redirect('/favorite')
    } catch(error) {
        console.log(error)
    }
})

module.exports = router