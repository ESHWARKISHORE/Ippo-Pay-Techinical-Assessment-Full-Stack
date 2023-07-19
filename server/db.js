const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://admin:admin123@ippopaytestapi.t2kwewd.mongodb.net/'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log('Database is connected successfully');
})

db.on('error', () => {
    console.log('Database is not connected successfully');
})

module.exports = mongoose