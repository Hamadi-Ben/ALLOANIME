const express = require('express')
const router = express.Router()

const {
  getCommentaires,
  getCommentaire,
  createCommentaire,
  updateCommentaire,
  deleteCommentaire
} = require('../controllers/commentaireController.js')

router.get('/', getCommentaires)

router.get('/:commentaireID', getCommentaire)

router.post('/', createCommentaire)

router.put('/:commentaireID', updateCommentaire)

router.delete('/:commentaireID', deleteCommentaire)

module.exports = router
