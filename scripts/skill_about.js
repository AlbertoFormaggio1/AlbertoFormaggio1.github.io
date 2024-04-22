$(document).ready(function(){
    var is_shown = false;

    $(window).scroll(function() {
        if(!is_shown)
            if(elementInView('.skill'))
                show();
    });

    // This is then function used to detect if the element is scrolled into view
    function elementInView(elem) {
        var docViewTop = $(window).scrollTop();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        var winSize = $(window).height();
        var docViewBottom = docViewTop + winSize
        if(elemTop >= docViewTop || elemBottom >= docViewTop)
            if(elemTop <= docViewBottom || elemBottom <= docViewBottom)
                return true;
        return false;
    }

    function fillBars() {
        setTimeout(function(that) {
            that.css('width', that.data("width"));
        }, 700, $(this));
    }

    function show(){
        $(".skill-bar").each(fillBars);
        is_shown = true;
    }

    if(!is_shown)
        if(elementInView('.skill'))
            show();
});