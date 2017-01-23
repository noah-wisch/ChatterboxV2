
module.exports = Backbone.Model.extend({
    defaults: {
        from: null,
        message: null,
    },
    addChat() {
        this.save(); // edit this to another part..?
    }
});

Backbone.sync = function (method, model) {
    if (method === 'create' || method === 'update') {
        const request = new XMLHttpRequest();
        request.open('POST', 'http://api.queencityiron.com/chats');

        let message = {
            from: model.get('from'),
            message: model.get('message'),
        }
        request.send(JSON.stringify(message));
    }
    if (method === 'read') {
        let response = [];

        const request = new XMLHttpRequest();
        request.open('GET', 'http://api.queencityiron.com/chats');
        request.addEventListener('load', function () {
            const response = JSON.parse(request.responseText);
            model.set('from', response.from);
            model.set('message', response.message);
        });
        request.send();
    }
};