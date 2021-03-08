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

        res.render('./villagers/show', { villager: villager })
    } catch (error) {
        console.log(error)
    }
})

// favorite post should hit this route
router.post('/', async (req, res) => {
    try {
        const [newVillager, created] = await db.villager.findOrCreate({
            where: { name: req.body.name }
        })
        res.locals.user.addVillager(newVillager)
        res.redirect('/favorite')

    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const villager = await db.villager.findByPk(req.params.id)
        res.locals.user.removeVillager(villager)
        res.redirect('/favorite')
    } catch(error) {
        console.log(error)
    }
})

module.exports = router