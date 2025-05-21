const connectToMongo = require('./db')
const cors = require('cors')
connectToMongo()

const express = require('express')
const app = express()
const port = 5000

const allowedOrigins = [
  'http://localhost:3000',
  'https://synergysquad123.vercel.app'
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'auth-token'],
  credentials: true
}));

app.use(express.json())

// Available Routes
app.use("/api/auth", require("./routes/auth.js"))

app.listen(port, () => {
  console.log(`synergysquads backend listening on port http://localhost:${port}`)
})