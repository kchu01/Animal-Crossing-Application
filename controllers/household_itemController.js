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
                imageUrl: itemArray.image_uri // shows undefined, maybe separte const name
            }
            // console.log(householdData.id)
            householdItems.push(householdData)
        }
        householdItems.splice(10, householdItems.length)
        res.render('./household_items', { householdItems: householdItems })
    } catch (error) {
        console.log(error)
    }
})

// GET Item/:id - Show details on one

// cant grab proper id - tried name
router.get('/:name', async (req, res) => {
    try {
        console.log(req.params)
        const name = req.params
        const acnhUrl = `https://acnhapi.com/v1/houseware/${name}`
        const response = await axios.get(acnhUrl)
        const item = response.data
        console.log(item)
        res.render('./household_items/show', { item: item })
    } catch (error) {

    }
    console.log(error)
})

module.exports = router