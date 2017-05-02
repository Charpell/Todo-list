// Check off Specific Todos By Clicking

$('ul').on("click", "li", function(){
	$(this).toggleClass("completed")

});

// $('li').on(function(){
// 	$(this).toggleClass("completed")

// });

//Click on X to Delete Todo
//$("span").click(function(event){ 
$("ul").on("click", "span", function(event){ // event prevents propagation
	$(this).parent().fadeOut(500, function(){ //removes the entire li
		$(this).remove();
	});  //removes the entire li
	event.stopPropagation();

})


// Add a new todo list 
$('input[type="text"').keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todotext = $(this).val();
		$(this).val("");
		//create a new li and add tp ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> "+ todotext +"</li>")
	}
})