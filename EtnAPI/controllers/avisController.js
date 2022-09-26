const Avis = require('../models/avisModel.js')

const getAllAvis = async (req, res) => {
  try {
    const avis = await Avis.find()
    if (!avis) throw Error('no user')
    res.status(205).json(avis)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const getAvis = async (req, res) => {
  try {
    const avis = await Avis.findById(req.params.avisID)

    if (!avis) {
      return res.status(404).send('nothing here')
    }
    return res.status(205).json(avis)
  } catch (err) {
    console.log(err)
  }
}

const createAvis = async (req, res) => {
  try {
    const { rate } = req.body
    if (!rate) {
      res.status(400).send('ko')
    }
    const avis = await Avis.create({ rate })
    res.status(201).json(avis)
  } catch (err) {
    console.log(err)
  }
}

const updateAvis = async (req, res) => {
  try {
    const update = await Avis.updateOne(
      { _id: req.params.avisID },
      {
        $set: {
          rate: req.body.rate
        }
      }
    )
    res.status(200).json(update)
  } catch (err) {
    console.log(err)
  }
}

const deleteAvis = async (req, res) => {
  const index = await Avis.deleteOne({ _id: req.params.avisID })
  res.status(204).json(index)
}

module.exports = {
  getAllAvis,
  getAvis,
  createAvis,
  updateAvis,
  deleteAvis
}
