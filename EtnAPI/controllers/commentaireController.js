const Commentaire = require('../models/commentaireModel.js')

const getCommentaires = async (req, res) => {
  try {
    const commentaires = await Commentaire.find()
    if (!commentaires) throw Error('no anim')
    res.status(205).json(commentaires)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const getCommentaire = async (req, res) => {
  try {
    const commentaire = await Commentaire.findById(req.params.commentaireID)

    if (!commentaire) {
      return res.status(404).send('Commentaire not found')
    }
    return res.status(205).json(commentaire)
  } catch (err) {
    console.log(err)
  }
}

const createCommentaire = async (req, res) => {
  try {
    const { AuthorName, commentaire } = req.body

    if (!(AuthorName && commentaire)) {
      res.status(400).send('ko')
    }

    const comments = await Commentaire.create({
      AuthorName,
      commentaire
    })
    res.status(201).json(comments)
  } catch (err) {
    console.log(err)
  }
}

const updateCommentaire = async (req, res) => {
  try {
    const update = await Commentaire.updateOne(
      { _id: req.params.commentaireID },
      {
        $set: {
          AuthorName: req.body.AuthorName,
          commentaire: req.body.commentaire
        }
      }
    )
    res.status(200).json(update)
  } catch (err) {
    console.log(err)
  }
}

const deleteCommentaire = async (req, res) => {
  const index = await Commentaire.deleteOne({ _id: req.params.commentaireID })
  res.status(200).json(index)
}

module.exports = {
  getCommentaires,
  getCommentaire,
  createCommentaire,
  updateCommentaire,
  deleteCommentaire
}
