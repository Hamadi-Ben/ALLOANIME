const mongoose = require('mongoose')

const avisSchema = mongoose.Schema({
  rate: {
    type: Number,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Avis', avisSchema)
