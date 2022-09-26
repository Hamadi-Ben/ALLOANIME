const Reservation = require('../models/reservationModel.js')

const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
    if (!reservations) throw Error('no reservation')
    res.status(205).json(reservations)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const getReservation = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.reservationID)

    if (!reservation) {
      return res.status(404).send('Reservation not found')
    }
    return res.status(205).json(reservation)
  } catch (err) {
    console.log(err)
  }
}

const createReservation = async (req, res) => {
  try {
    const { reserver } = req.body

    if (!reserver) {
      res.status(400).send('ko')
    }
    const reservation = await Reservation.create({
      reserver
    })
    res.status(201).json(reservation)
  } catch (err) {
    console.log(err)
  }
}

const updateReservation = async (req, res) => {
  try {
    const update = await Reservation.updateOne(
      { _id: req.params.reservationID },
      {
        $set: {
          reserver: req.body.price
        }
      }
    )
    res.status(200).json(update)
  } catch (err) {
    console.log(err)
  }
}

const deleteReservation = async (req, res) => {
  const index = await Reservation.deleteOne({ _id: req.params.reservationID })
  res.status(204).json(index)
}

module.exports = {
  getReservations,
  getReservation,
  createReservation,
  updateReservation,
  deleteReservation
}
