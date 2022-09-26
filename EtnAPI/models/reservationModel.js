const mongoose = require('mongoose')

const reservationSchema = mongoose.Schema({
  reserver: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('reservation', reservationSchema)
