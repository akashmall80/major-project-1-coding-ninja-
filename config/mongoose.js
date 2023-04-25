const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;


//on error
db.on('error',console.error.bind("error in connecting database"));

//on connection
db.once('open',function(){
    console.log('connect to db');
})

module.exports = db;