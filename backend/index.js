const connectToMongo = require('./db')
const cors = require('cors')
connectToMongo()

const express = require('express')
const app = express()
const port = 5000

app.use(cors({
  origin: 'https://synergysquad.onrender.com', // Allow requests from your frontend
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'auth-token'], // Specify allowed headers
}));
app.use(express.json())

// Available Routes
app.use("/api/auth", require("./routes/auth.js"))

app.listen(port, () => {
  console.log(`synergysquads backend listening on port http://localhost:${port}`)
})