// Check off Specific Todos By Clicking
$('li').click(function(){
	$(this).toggleClass("completed")

});

//Click on X to Delete Todo
$("span").click(function(event){ // event prevents propagation
	$(this).parent().fadeOut(500, function(){ //removes the entire li
		$(this).remove();
	});  //removes the entire li
	event.stopPropagation();

})