const { default: mongoose } = require('mongoose')

const connection = () => {
  mongoose.connect(
    'mongodb+srv://alloanime:allocine@alloanime.g77hzxb.mongodb.net/?retryWrites=true&w=majority'
    // "mongodb+srv://<username>:<password>@alloanime.g77hzxb.mongodb.net/?retryWrites=true&w=majority"
  )
  const db = mongoose.connection
  db.on('error', (err) => console.log(err))
  db.on('open', () => console.log('DATABASE : OK'))
}

module.exports = { connection }
