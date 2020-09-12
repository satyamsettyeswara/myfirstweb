const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codial_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting mongodb'));

db.once('open',function(){
    console.log('Successful connection to database');
});

module.exports = db;