const express = require('express')
const router = express.Router()
// const userController = require('../controllers/userController')

/* GET users listing. */
// router.get('/', function (req, res) {
//   res.json(getUsers)
// })

const { getUsers, getUser, LogUser, createUser, updateUser, deleteUser } = require('../controllers/userController.js')

router.get('/', getUsers)

router.get('/:userID', getUser)

router.get('/login', LogUser)

router.post('/register', createUser)

router.put('/:userID', updateUser)

router.delete('/:userID', deleteUser)

module.exports = router

module.exports = router
