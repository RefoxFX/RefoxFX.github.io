$('document').ready(function(){
    $('#info').click(function(){
    $('.info_list').toggleClass('info_list_visible');
    $('#info').toggleClass('info_light');
    $('#info span').toggleClass('info_span_light');
    $('#triangle').toggleClass('info_triangle_light');
    $('#info').toggleClass('info_hover');
                               });
});
$(window).resize(function(){
    var window_size = $(window).width();
    alert(window_size);
    
});
