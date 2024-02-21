const mongoose = require("mongoose");

const mongoDatabaseUrl = "mongodb+srv://haisama742002:jI5hZ7kXHAk2l4wX@cluster0.z9g5p8j.mongodb.net/?retryWrites=true&w=majority";


const connectDb = () => {
    return mongoose.connect(mongoDatabaseUrl);
}

module.exports = { connectDb };