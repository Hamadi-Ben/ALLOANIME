const express = require('express')
const router = express.Router()

const { getAllAvis, getAvis, createAvis, updateAvis, deleteAvis } = require('../controllers/avisController.js')

router.get('/', getAllAvis)

router.get('/:avisID', getAvis)

router.post('/', createAvis)

router.put('/:avisID', updateAvis)

router.delete('/:avisID', deleteAvis)

module.exports = router
