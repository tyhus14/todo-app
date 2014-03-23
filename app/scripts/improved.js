var fakeModel = {
  description: 'Feed the Dog',
  done: false,
  id: _.uniqueId('id')
}
 
var Todo = Backbone.Model.extend();
 
var TodoView = Backbone.View.extend({
 
  className: 'new-item-list',
  renderTemplate: _.template($('.new-todo-template').text()),
 
  events: {
    "click .js-complete-todo": "toggleDone",
    "click .js-remove-todo": "remove",
  },
 
  initialize: function(){
    console.log('hey buddy');
    $('.todo-items').prepend( this.el )
    this.render()
 
    this.listenTo(this.model, 'change', this.render);

  },
 
  render: function(){
    this.$el.html(this.renderTemplate(this.model.attributes))
    console.log('rendered!')
  },
 
  toggleDone: function(){
    this.model.set('done', !this.model.get('done'))
    console.log(this.model.attributes)
  },


 
})
var modelInstance = new Todo(fakeModel)
var view = new TodoView( { model: modelInstance } )