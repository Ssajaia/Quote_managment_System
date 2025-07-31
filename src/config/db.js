require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI not defined in .env');
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Connection error:', error);
  }
};

module.exports = connectDB;
