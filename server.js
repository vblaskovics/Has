import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: 'http://localhost:8081',
}

app.use(cors(corsOptions))

app.use(json())
app.use(urlencoded({ extended: true }))

// Routing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to HAS application.' })
})

// Start app
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
