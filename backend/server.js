const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./app/models')
const tutorialRoutes = require('./app/routes/tutorial.routes')

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.sequelize.sync()

// Routing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to HAS application.' })
})

tutorialRoutes(app)

// Start app
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
