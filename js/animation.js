(function($){

    $(document).ready(function(){
        $('#logo img').imagesLoaded(function() {
            $('#logo').show();
            if ( navigator.userAgent.match(/msie/i) ) {
            } else {
                $('#logo').addClass('playing');
            }
        });
    });

})(jQuery);
