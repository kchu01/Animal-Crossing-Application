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
            const householdItemObj = responce.data[householdItem] // works
            const nameObj = householdItemObj['name'] // says undefined
            // const name = nameObj['name-USen']


            // console.log(nameObj)
        }
        householdItems.splice(10, householdItems.length)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router