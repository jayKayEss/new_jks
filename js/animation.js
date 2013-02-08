(function($){

    $(document).ready(function(){
        console.log(navigator.userAgent);
        if ( navigator.userAgent.match(/msie/i) ) {
            $('#logo').addClass('static');
        } else {
            $('#logo').addClass('playing');
        }
    });

})(jQuery);
