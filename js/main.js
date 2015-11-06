$('.galimg img').each(function(e){

	console.log( $(this).css('width') );
	console.log( $(this).css('height') )

});

var width = $('.galimg').width();

$('.galimg').css('height', width);



$('.galimg img').each(function(e){
	var imgW = $('.galimg img').css('width');
	var imgH = $('.galimg img').css('height');


	if ( imgW > imgH ){
		$('.galimg img').addClass('landscape')
	}
	else if ( imgW < imgH ){
		$('.galimg img').addClass('portrait')
	}



});
