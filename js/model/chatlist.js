
/**
 * Use a collection when your primary data is an array
 */
const ChatModel = require('./chat');

module.exports = Backbone.Collection.extend({
    // type of model stored in this collection
    // every collection contains some type of model...
    model: ChatModel,

    createNew(newMessage) {
        console.log('creating new model')
        const newChat = new ChatModel();
        newChat.set('name', newMessage);
        this.add(newChat);
    },
});

