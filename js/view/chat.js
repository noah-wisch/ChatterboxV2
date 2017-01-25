
module.exports = Backbone.View.extend({
    initialize() {
        this.model.on('change', this.render, this);
        this.model.on('add', this.render, this);
    },
    events: {
        'click #sent': 'updateEvent',
    },
    updateEvent() {
        const message = this.el.querySelector('#write').value;
        const from = this.el.querySelector('#name').value;
        this.model.createNew(from, message);
 
    },
    render() {
        const template = document.querySelector('#chat-template').innerHTML;
        this.el.querySelector('.messages').innerHTML = '';
        for (let i = 0; i < this.model.models.length; i++) {
            const m = this.model.models[i];

            const li = document.createElement('li');
            //li.textContent = m.get('name');
            li.innerHTML = Mustache.render(
                template,
                {
                    name: m.get('name'),
                    attendees: m.get('attendees'),
                    date: m.get('when'),
                }
            );

        //    const button = li.querySelector('.remove');
        //    button.addEventListener('click', () => {
        //        console.log('clicked on ' + m.get('name'));
        //        this.model.remove(m);
        //    });

            const parent = this.el.querySelector('.messages');
            parent.appendChild(li);
        }
    },
});