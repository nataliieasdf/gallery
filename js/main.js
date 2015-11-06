$('.galimg img').each(function(e){

	console.log( $(this).css('width') );
	console.log( $(this).css('height') )

});

var width = $('.galimg img').each(function(){
		$(this).css('width');
});

var height = $('.galimg img').each(function(){
		$(this).css('height');
});


if (width > height){
	$('.galimg').addClass('.landscape');
}

else if (width < height){
	$('.galimg').addClass('.portrait');
}