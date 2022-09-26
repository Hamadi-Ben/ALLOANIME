const User = require('../models/userModel.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const dotenv = require("dotenv").config();

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    if (!users) throw Error('no user')
    res.status(205).json(users)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userID)

    if (!user) {
      return res.status(404).send('User not found')
    }
    return res.status(205).json(user)
  } catch (err) {
    console.log(err)
  }
}

const LogUser = async (req, res) => {
  try {
    // Get user input
    const { username, email, password } = req.body
    // Valide la saisie de l'utilisateur
    if (!(username && email && password)) {
      res.status(400).send('Welcome')
    }
    // Reconnait l'existence ou non de l'utilisateur dans la database
    // eslint-disable-next-line no-use-before-define
    const user = await User.findById(req.params.userID)

    if (user && (await bcrypt.compare(password, user.password))) {
      // Crée le token
      const token = jwt.sign({ email: user[0].email, userID: user[0]._id }, 'secret', {
        expiresIn: '30min'
      })
      // enregistre le token
      user.token = token

      res.status(200).json(user, {
        message: 'User is logged',
        token
      })
    }
    res.status(400).send('Mauvaise input')
  } catch (err) {
    console.log(err)
  }
}

const createUser = async (req, res) => {
  try {
    // const newuser = new users( {
    //     id : users.length + 1,
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password
    // })

    const { username, email, password } = req.body
    // Valide la saisie de l'utilisateur
    if (!(email && password && username)) {
      res.status(400).send('ok')
    }

    // vérifie si l'utilisateur n'a pas déja un compte
    // eslint-disable-next-line no-use-before-define
    const oldUser = await User.findOne({ email })

    if (oldUser) {
      return res.status(409).send('User Already Exist. Please Login')
    }
    // Crypte le Mot de passe
    encryptedPassword = await bcrypt.hash(password, 10)
    // Crée l'utilisateur dans la database
    const user = await User.create({
      username,
      email: email.toLowerCase(), // convertis l'email en minuscule
      password: encryptedPassword
    })
    // Crée le token
    const token = jwt.sign({ user_id: user._id, email }, 'secret', {
      expiresIn: '30min'
    })
    // Enregistre le token de l'utilisateur
    user.token = token
    res.status(201).json(user)
  } catch (err) {
    console.log(err)
  }
}

const updateUser = async (req, res) => {
  try {
    const update = await User.updateOne(
      { _id: req.params.userID },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        }
      }
    )
    res.status(200).json(update)
  } catch (err) {
    console.log(err)
  }
}

const deleteUser = async (req, res) => {
  const index = await User.deleteOne({ _id: req.params.userID })
  res.status(204).json(index)
}

module.exports = {
  getUsers,
  getUser,
  LogUser,
  createUser,
  updateUser,
  deleteUser
}
