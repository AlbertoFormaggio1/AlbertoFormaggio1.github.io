$(document).ready(function(){
    $('.box').each(function(){
        animateBoxes($(this));
    });
    });

    function animateBoxes(box){
    var h = $(window).height() - box.height();
    var w = $(window).width() - box.width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    var position = box.offset();
    var oh = position.top;
    var ow = position.left;
    var distance = Math.sqrt(Math.pow(oh - nh,2) + Math.pow(ow - nw,2));
    var time = distance/0.1;

    box.animate({top:nh, left: nw}, time, 'swing', function(){
        animateBoxes(box);
    });
}