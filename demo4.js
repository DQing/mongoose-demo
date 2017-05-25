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

Kitten.find(function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

Kitten.find({name: 'douqing'}, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

Kitten.remove({name: 'douqing'}, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

Kitten.update({_id: '592573e222fe4833e74d5617'}, {name: 'heko'}, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});