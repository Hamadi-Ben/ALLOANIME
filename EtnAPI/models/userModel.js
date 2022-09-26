const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  token: {
    type: String
  },
  // animeReserver: [
  //   {
  //     type: mongoose.SchemaType.reservationID,
  //     ref: 'reserve'
  //   }
  // ],
  // animeCommenter: [
  //   {
  //     type: mongoose.SchemaType.commentaireID,
  //     ref: 'commenter'
  //   }
  // ],
  // animeAviser: [
  //   {
  //     type: mongoose.SchemaType.avisID,
  //     ref: 'aviser'
  //   }
  // ]
})

module.exports = mongoose.model('User', userSchema)
