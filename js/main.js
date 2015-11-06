$('.galimg img').each(function(e){

	console.log( $(this).css('width') );
	console.log( $(this).css('height') )

});

var width = $('.galimg').width();

$('.galimg').css('height', width);

var imgW = $('.galimg img').each(function(){
				$(this).css('width');
			});


var imgH =$('.galimg img').each(function(){
				$(this).css('height');
			});

// if ( imgW > imgH ){
// 	$('.galimg img').addClass('landscape')
// }
// else if ( imgW < imgH ){
// 	$('.galimg img').addClass('portrait')
// }