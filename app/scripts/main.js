$(document).ready(function(){

var firstTemplate = _.template($('.new-todo-template').text());

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

		$('.main-input').val('');

		totalCount();

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

		$('.main-input').val('');

		totalCount();

	});


	// Delete Button
	$('.js-todo-items').on('click', '.js-remove-todo', function(){

		var parentId = $(this).parent().attr('id');

		todoArray = _.reject(todoArray, function(item){
			return item.id == parentId;
		});

		$(this).parent().remove();

		totalCount();
	});

	// Complete Button
	$('.js-todo-items').on('click', '.js-complete-todo', function(){

		$(this).parent('.new-item').find('.new-box').addClass('active');

		var parentId = $(this).parent().attr('id');

		var item = _.findWhere(todoArray, {id: parentId});

		item.done = true;

		$(this).siblings('.edit-input').hide();

		totalCount()
	});

	// New Button
	$('.js-todo-items').on('click', '.new-box', function(){
		$(this).parent('.new-item').find('.new-box').removeClass('active');

		var parentId = $(this).parent().attr('id');

		var items = _.findWhere(todoArray, {id: parentId});

		items.done = false;

		totalCount()
	});

	// Edit Button

	$('.js-todo-items').on('click', '.pencil-btn', function(){
		$(this).siblings('.edit-input').show();

		$(this).siblings('.edit-input').focus();

	});

	$('.js-todo-items').on('blur', '.edit-input', function(){
	    var parentId = $(this).parent().attr('id');
	    var newDescription = $(this).val();
		var item = _.findWhere(todoArray, {id: parentId});
		
		item.description = newDescription 

		$(this).siblings('.description').empty().html(newDescription)
		$(this).hide()
	});


totalCount()

function totalCount(){
	var allCount = todoArray.length
	var completedCount = _.where(todoArray, {done: true}).length
	var activeCount = _.where(todoArray, {done: false}).length

	$('.total-js').empty().html(allCount)
	$('.completed-js').empty().html(completedCount)
	$('.active-js').empty().html(activeCount)
}

	
});