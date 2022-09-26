const express = require('express')
const router = express.Router()

const {
  getReservations,
  getReservation,
  createReservation,
  updateReservation,
  deleteReservation
} = require('../controllers/reservationController.js')

router.get('/', getReservations)

router.get('/:reservationID', getReservation)

router.post('/', createReservation)

router.patch('/reservation', updateReservation)

router.delete('/:reservationID', deleteReservation)

module.exports = router
