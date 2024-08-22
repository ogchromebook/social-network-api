require('dotenv').config();
const mongoose = require('mongoose');

const connectionString = process.env.DB_URI || 'mongodb://localhost/socialnetworkDB';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;