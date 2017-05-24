var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/test');
db = mongoose.connection;
db.once('open', function callback() {
    console.log('open success');
});
var kittySchema = mongoose.Schema({
    name: String
});
var Kitten = mongoose.model('kitten', kittySchema);
var silence = new Kitten({name: "Silence"});
silence.save(function (err) {
    console.log('save success');
});
