$('.galimg').each(function(e){

	console.log( $(this).css('width') );
	console.log( $(this).css('height') )

});

var width = $('.galimg').css('width');
var height = $('.galimg').css('height');


if (width > height){
	$(this).addClass('.landscape');
}

else if (width < height){
	$(this).addClass('.portrait');
}