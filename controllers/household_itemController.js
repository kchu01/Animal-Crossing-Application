const router = require('express').Router()
const db = require('../models')
const axios = require('axios')

// GET household_items index - /household_items - get data from api
router.get('/', async (req, res) => {
    try {
        const householdItemsUrl = 'https://acnhapi.com/v1/houseware/'
        const responce = await axios.get(householdItemsUrl)

        const householdItems = []

        for (const householdItem in responce.data) {
            const householdItemArray = responce.data[householdItem]
            const itemArray = householdItemArray[0]
            const name = itemArray.name['name-USen']
            let householdData = {
                name: name,
                id: itemArray['internal-id'],
                imageUrl: itemArray.image_uri 
            }
            householdItems.push(householdData)
        }
        householdItems.splice(10, householdItems.length)
        // console.log(householdItems[0].name.split(" ").join("_"), '👀👀👀🐱‍🚀🐱‍🚀👀🐱‍🚀👀')
        res.render('./household_items', { householdItems: householdItems })
    } catch (error) {
        console.log(error)
    }
})

// GET Item/:id - Show details on one
router.get('/:name', async (req, res) => {
    try {
        const acnhUrl = `https://acnhapi.com/v1/houseware/${req.params.name}`
        const response = await axios.get(acnhUrl)
        const householdItem = response.data

        res.render('./household_items/show', { householdItem: householdItem })
    } catch (error) {
        console.log(error)
    }
})

// POST route
router.post('/', async (req, res) => {
    try {
        const [newHouseholdItem, created] = await db.householdItem.findOrCreate({
            where: { name: req.body.name }
        })
        res.locals.user.addHouseholdItem(newHouseholdItem)
        res.redirect('/favorite')
    } catch(error) {
        console.log(error)
        res.redirect('/')
    }
})

module.exports = router