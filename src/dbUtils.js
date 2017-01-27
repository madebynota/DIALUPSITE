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
    },

    getColor: function() {
        var colors = [
            '#ddaedc',
            '#4cb397', 
            '#ffd281',
            '#f6b40e',
            '#75b4be',
            '#f04673',
            '#251879'
        ];

        var index = Math.floor(Math.random() * (colors.length + 1));
        return (colors[index]);
    }
}

