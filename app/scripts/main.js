$(document).ready(function(){

var firstTemplate = _.template($('.new-todo').text());

todoArray = [];

	// Add Button
	$('.add-btn').click(function(){

		var description = $('.main-input').val();

		var todo = {
			description: description || 'no item',
			done: false,
			id: _.uniqueId('todo')
		}

		var nextTemplate = firstTemplate(todo);

		$('.js-todo-items').prepend(nextTemplate);

		todoArray.push(todo);

	});

	// On Enter
	$('.todo-form').submit(function(){

		var description = $('.main-input').val();

		var todo = {
			description: description || 'no item',
			done: false,
			id: _.uniqueId('todo')
		}

		var nextTemplate = firstTemplate(todo);

		$('.js-todo-items').prepend(nextTemplate);

		todoArray.push(todo);

	});


	// Delete Button
	$('.js-todo-items').on('click', '.js-remove-todo', function(){

		var parentId = $(this).parent().attr('id');

		todoArray = _.reject(todoArray, function(item){
			return item.id == parentId;
		});

		$(this).parent().remove();
	});

	// Complete Button
	$('.js-todo-items').on('click', '.js-complete-todo', function(){

		$(this).parent('.new-item').find('.new-box').addClass('active');

		var parentId = $(this).parent().attr('id');

		var items = _.findWhere(todoArray, {id: parentId});

		items.done = true;

	});

	// New Button
	$('.js-todo-items').on('click', '.new-box', function(){
		$(this).parent('.new-item').find('.new-box').removeClass('active');

		var parentId = $(this).parent().attr('id');

		var items = _.findWhere(todoArray, {id: parentId});

		items.done = false;

	})

	
});