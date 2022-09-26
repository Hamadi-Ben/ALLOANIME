const express = require('express')
const router = express.Router()
// const animeController = require('../controllers/animeController')

const { getAllAnime, getAnime, createAnime, updateAnime, deleteAnime } = require('../controllers/animeController')

router.get('/', getAllAnime)

router.get('/:animeID', getAnime)

router.post('/', createAnime)

router.put('/:animeID', updateAnime)

router.delete('/:animeID', deleteAnime)

module.exports = router
