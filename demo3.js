var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var db = mongoose.createConnection('localhost', 'test');
var schema = new mongoose.Schema({
    name: String
});

var collectionName = 'kittens';

var M = db.model('Kitten', schema, collectionName);

var silence = new M({name: "douqing"});
silence.save(function (err) {

    console.log('success');
});