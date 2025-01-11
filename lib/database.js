const mongoose = require('mongoose');
require("dotenv").config()
const uri = `${process.env.DB_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URI}/?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`
const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

let mongoInstance;

async function connectMongoDb() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    mongoInstance = await mongoose.connect(uri, clientOptions);
    mongoInstance.connection.db.admin().command({ ping: 1 });

    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  }catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } 
}
module.exports = { connectMongoDb, mongoInstance };
