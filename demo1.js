var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'mongose');
mongoose.Promise = global.Promise;

db.on('error', function () {
    console.log('open error');
});

db.on('open', function () {
    console.log('open success');
});
