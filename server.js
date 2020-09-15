import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import db from './app/models'
import tutorialRoutes from './app/routes/tutorial.routes'

const app = express()

const corsOptions = {
  origin: 'http://localhost:8081',
}

app.use(cors(corsOptions))

app.use(json())
app.use(urlencoded({ extended: true }))

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
