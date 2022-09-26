const mongoose = require('mongoose')

const commentaireSchema = mongoose.Schema({
  AuthorName: {
    type: String,
    required: true
  },
  commentaire: {
    type: String,
    required: true
  },
  // commenterPar: [
  //   {
  //     type: mongoose.SchemaType.userID,
  //     ref: 'commentaire de'
  //   }
  // ]
})

module.exports = mongoose.model('commentaire', commentaireSchema)
