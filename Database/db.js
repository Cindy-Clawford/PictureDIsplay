const mongoose = require('mongoose');
// const mongoUri = require('./mongouri.js');
const mongoUri = "mongodb://localhost/photo"
mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connect(mongoUri);

module.exports = db;
