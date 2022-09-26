const Anime = require('../models/animeModel.js')

const getAllAnime = async (req, res) => {
  try {
    const animes = await Anime.find()
    if (!animes) throw Error('no anim')
    res.status(205).json(animes)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const getAnime = async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.animeID)

    if (!anime) {
      return res.status(404).send('Anime not found')
    }
    return res.status(205).json(anime)
  } catch (err) {
    console.log(err)
  }
}

const createAnime = async (req, res) => {
  try {
    const { title, author, year, description, price } = req.body

    if (!(title && author && year && description && price)) {
      res.status(400).send('ko')
    }

    const newAnime = await Anime.create({
      title,
      author,
      year,
      description,
      price
    })
    res.status(201).json(newAnime)
  } catch (err) {
    console.log(err)
  }
}

const updateAnime = async (req, res) => {
  try {
    const update = await Anime.updateOne(
      { _id: req.params.animeID },
      {
        $set: {
          title: req.body.title,
          author: req.body.author,
          year: req.body.year,
          description: req.body.description,
          price: req.body.price
        }
      }
    )
    res.status(200).json(update)
  } catch (err) {
    console.log(err)
  }
}

const deleteAnime = async (req, res) => {
  const index = await Anime.deleteOne({ _id: req.params.animeID })
  res.status(204).json(index)
}

module.exports = {
  getAllAnime,
  getAnime,
  createAnime,
  updateAnime,
  deleteAnime
}
