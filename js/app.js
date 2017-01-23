
const ChatView = require('./view/chat');
const ChatList = require('./model/chatlist');

window.addEventListener('load', () => {
    //const event = new EventModel();
    const list = new ChatList();

    // when we create view it needs this.el and this.model to do it's job
    // this is when we assign those
    const view = new ChatView({
        el: document.querySelector('body'),
        model: list,
    });
    view.render();
});
