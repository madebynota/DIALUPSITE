var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  date: Date,
  user: String,
  text: String
});

var Message = db.model('Message', messageSchema);
module.exports = Message;
