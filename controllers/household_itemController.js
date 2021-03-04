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
                imageUrl: itemArray.image_uri // shows undefined, maybe separte const name
            }
            householdItems.push(householdData)
        }
        householdItems.splice(10, householdItems.length)
        res.render('./household_items', { householdItems: householdItems })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router