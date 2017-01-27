var mongoose = require('mongoose');
var Message = require('./models/Message');

module.exports = {
    getMessages: function(numMessages, callback) {
        Message.find(function(err, messages) {
            if (err) return console.log(err);
            callback(messages);
        }).skip(Message.count() - numMessages);
    },

    saveMessage: function(username, text, color) {
        var newMessage = new Message({
            timestamp: Date.now(),
            user: username,
            color: color,
            text: text
        });

        newMessage.save(function(err, newMessage) {
            if (err) return console.log(err);
        });
    }
}
