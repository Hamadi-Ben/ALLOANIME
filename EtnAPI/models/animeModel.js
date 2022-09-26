const mongoose = require('mongoose')

const animeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: String,
    required: true,
    unique: true
  }
  // reserved: [
  //   {
  //     type: mongoose.SchemaType.ReservationID,
  //     ref: 'reserved'
  //   }
  // ],
  // comment: [
  //   {
  //     type: mongoose.SchemaType.commentaireID,
  //     ref: 'commentaire'
  //   }
  // ],
  // avis: [
  //   {
  //     type: mongoose.SchemaType.avisID,
  //     ref: 'avis'
  //   }
  // ]
})

module.exports = mongoose.model('Anime', animeSchema)
