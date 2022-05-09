var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const historySchema = new Schema({
    // xVal:  Number, // String is shorthand for {type: String}
    // yVal: Number,
    // operation: String,
    // result: Number,
    message: String,
    createdDate: { type: Date, default: Date.now }
});

const History = mongoose.model('History', historySchema);
module.exports = History;