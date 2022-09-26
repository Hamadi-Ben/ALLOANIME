const express = require('express')
const path = require('path')
// const cookieParser = require('cookie-parser');
const logger = require('morgan')
const database = require('./config/database')
require('dotenv').config()

const auth = require('./middleware/auth')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const animeRouter = require('./routes/anime')
const avisRouter = require('./routes/avis')
const commentaireRouter = require('./routes/commentaire')
const reservationRouter = require('./routes/reservation')
const cors = require('cors')
const app = express()
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.post('/register', usersRouter)
app.post('/login', usersRouter)

app.use('/anime', animeRouter)
app.use('/avis', avisRouter)
app.use('/commentaire', commentaireRouter)
app.use('/reservation', reservationRouter)

app.post('/welcome', auth, (req, res) => {
  res.status(200).send('Bienvenue 🙌 ')
})

database.connection()

// error handler
// app.use(function (err, req, res) {
//   // set locals, only providing error in development
//   res.locals.message = err.message
//   res.locals.error = req.app.get('env') === 'development' ? err : {}

//   // render the error page
//   res.status(err.status || 500)
//   res.render('error')
// })

module.exports = app
