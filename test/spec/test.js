/* global describe, it */

(function () {
    'use strict';

    describe('In the Todo App', function () {
            describe('when the add button is clicked', function () {
            it('should push info to the array', function () {

            	var todoArray = [];

            	var todo = {
            		description: "Hello",
            		done: false,
            		id: 4
            	}

            	$('.js-add-btn').click();

            	todoArray.push(todo);

            	expect(todoArray).to.contain(todo);

            	
            });
        });

            describe('when the delete button is clicked', function () {
            it('should remove info in the array', function () {

            	var todoArray = [

            	{description: "Hello", done: false, id: 1},
            	{description: "Hi", done: false, id: 2}

            	];

            	$('.js-add-btn').click();

            	$(todoArray).remove([0]);

            	expect(todoArray).to.deep.equal({description: "Hi", done: false, id: 2});
            });
        });
    });
})();
