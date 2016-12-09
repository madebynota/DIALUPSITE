var mongoose = require('mongoose');
var Message = require('./models/Message');

module.exports = {
  getMessages: function() {
    Message.find(function (err, messages) {
      if(err) return console.log(err);
      console.log(messages);
    })
  },

  saveMessage: function(username, text) {
    var newMessage = new Message({
      timestamp: Date.now(),
      user: username,
      text: text
    });

    newMessage.save(function (err, newMessage) {
      if(err) return console.log(err);
      console.log("Message Saved Successfully")
    });
  }
}
