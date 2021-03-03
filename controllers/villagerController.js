const router = require('express').Router()
const db = require('../models')
const axios = require('axios')

// GET villager index - /villager - gets data from the api
router.get('/', async (req, res) => {
    try {
        const acnhURL = 'https://acnhapi.com/v1/villagers'
        const response = await axios.get(acnhURL)

        const villagers = []

        for (const villager in response.data) {
            const villagerObj = response.data[villager]
            const nameObj = villagerObj['name']
            const name = nameObj['name-USen']
            // names.push(name)
            let villagerData = {
                name: name,
                id: villagerObj.id,
                imageUrl: villagerObj.image_uri
            }
            villagers.push(villagerData)
        }
        villagers.splice(50, villagers.length)
        res.render('./villagers', { villagers: villagers })

    } catch (error) {
        console.log(error)
    }
})

// GET villager/id: - SHOW one villager deets
router.get('/:id', async (req, res) => {
    try {
        const acnhURL = `https://acnhapi.com/v1/villagers/${req.params.id}`
        const response = await axios.get(acnhURL)
        const villager = response.data

        res.render('./villagers/show'), { villager: villager }

        console.log(villager)
    } catch (error) {
        console.log(error)
    }
})
// can display details in the console but not rendering properly

// grab api again to look up id
// store in a global var to grab data from db (array index or loop)


// make separate villagers fo rnon users and fav users

module.exports = router