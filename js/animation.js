(function($){

    $(document).ready(function(){
        if ( navigator.userAgent.match(/msie/i) ) {
            $('#logo').addClass('static');
        } else {
            $('#logo img').imagesloaded(function() {
                $('#logo').addClass('playing');
            }
        }
    });

})(jQuery);
