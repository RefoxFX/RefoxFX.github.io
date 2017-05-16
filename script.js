$('document').ready(function(){
    $('#info').click(function(){
    $('.info_list').toggleClass('info_list_visible');
    $('#info').toggleClass('info_light');
    $('#info span').toggleClass('info_span_light');
    $('#triangle').toggleClass('info_triangle_light');
    $('#info').toggleClass('info_hover');
                               });
	$(document).mouseup(function (e){
        if($('.info_list').hasClass('info_list_visible')){
		var div = $("#info"); 
		if (!div.is(e.target)
		    && div.has(e.target).length  === 0) {
			$('.info_list').toggleClass('info_list_visible');
            $('#info').toggleClass('info_light');
            $('#info span').toggleClass('info_span_light');
            $('#triangle').toggleClass('info_triangle_light');
            $('#info').toggleClass('info_hover');
		};};
	});
}); 