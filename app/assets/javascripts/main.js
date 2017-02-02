
function main() {
    (function () {
       'use strict';

        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 500;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })

    	$(document).ready(function( $ ) {
    		if($("span.count").length > 0){
    			$('span.count').counterUp({
    					delay: 10, // the delay time in ms
    			time: 1000 // the speed time in ms
    			});
    		}
    	});

    }());
}
main();