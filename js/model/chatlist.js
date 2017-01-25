
const ChatModel = require('./chat');

module.exports = Backbone.Collection.extend({

    model: ChatModel,

    createNew(message, from) {
        console.log('creating new model')

        const newChat = new ChatModel();
        newChat.save('from', from);
        newChat.save('message', message);
        this.add(newChat);
        newChat.save();
        console.log(newChat);
    },
    // newChat: {
    //     const newChat = new
    // },
});

