
const ChatView = require('./view/chat');
const ChatList = require('./model/chatlist');
const ajax = require('./ajax');

window.addEventListener('load', () => {
    
    const list = new ChatList();
    list.fetch(); 

    const view = new ChatView({
        el: document.querySelector('body'),
        model: list,
    });
    view.render();
});
