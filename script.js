$(document).ready(function(){
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'click.wav');
    audioElement.setAttribute('autoplay', 'autoplay');

	function AnimateRotate() {
	    // caching the object for performance reasons
	    var $elem = $('#wheel');

	    // we use a pseudo object for the animation
	    // (starts from `0` to `angle`), you can name it as you want
	    $({deg: 0}).animate({deg: 10000}, {
	        duration: 20000,
	        step: function(now) {
	            // in the step-callback (that is fired each step of the animation),
	            // you can use the `now` paramter which contains the current
	            // animation-position (`0` up to `angle`)
	            $elem.css({
	                transform: 'rotate(' + now + 'deg)'
	            });
	            $elem.css({
	                transform: '-webkit-transition: all 600ms easing’s easeOut'
	            });
	            $elem.css({
	                transform: 'transition: all 600ms easing’s easeOut'
	            });
	            audioElement.play();
	        }
	    });
	}

	$("#clickButton").click(function(){
		AnimateRotate();
	});
}); 