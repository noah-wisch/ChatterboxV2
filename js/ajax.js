
const ChatList = require('./model/chatlist');
//const ChatModel = require('./model/chat');

module.exports = Backbone.sync = function (method, model) {
    if (method === 'create' || method === 'update') {
        console.log('siri');
        const request = new XMLHttpRequest();
        request.open('POST', 'http://api.queencityiron.com/chats');
        request.addEventListener('load', function () {
            model.collection.fetch();
        });

        const body = JSON.stringify({
            message: model.get('message'),
            from: model.get('from'),
        });
        request.send(body);
    }


    if (method === 'read') {
        let response = [];

        const request = new XMLHttpRequest();
        request.open('GET', 'http://api.queencityiron.com/chats');
        request.addEventListener('load', function () {
            const response = JSON.parse(request.responseText);

            
            // for (let i = 0; i < response.chats.length; i++) {
            //     // msg = new ChatModel();
            //     // msg.set('from', response.chats[i].from)
            //     // model.add(msg);
            //     model.set('from', response.from);
            //     model.set('message', response.message);
            //     model.trigger('change');
            // }
        });
        request.send();
    }
};



