var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  timestamp: Date,
  user: String,
  text: String,
  color: String
});

var Message = mongoose.model('Message', messageSchema);
module.exports = Message;
