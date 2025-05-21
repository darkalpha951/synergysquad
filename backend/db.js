const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://youtube:qwerty123456@cluster0.ypp8a.mongodb.net/synergysquads"

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to Mongo Successfully")
    }).catch((e) => {
        console.log(e.message)
    })
}

module.exports = connectToMongo