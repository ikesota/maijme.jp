// rollover
function initRollOverImages() {
  var image_cache = new Object();
  $(".over").each(function(i) {
    var imgsrc = this.src;
    var dot = this.src.lastIndexOf('.');
    var imgsrc_ro = this.src.substr(0, dot) + '_on' + this.src.substr(dot, 4);
    image_cache[this.src] = new Image();
    image_cache[this.src].src = imgsrc_ro;
    $(this).hover(
      function() { this.src = imgsrc_ro; },
      function() { this.src = imgsrc; });
  });
}

$(document).ready(initRollOverImages);

// SmoothScroll
jQuery.fn.extend({
  scrollTo : function(speed, easing) {
    if(!$(this)[0].hash || $(this)[0].hash == "#") {
      return false;
    }
    return this.each(function() {
      var targetOffset = $($(this)[0].hash).offset().top;
      $('html,body').animate({scrollTop: targetOffset}, speed, easing);
    });
  }
});

$(document).ready(function(){
  $('a[href*=#]').click(function() {
    $(this).scrollTo(500);
    return false;
  });
});


// pointer

$(document).ready(function(){
	$('body').pointer();
});

(function($){
	$.fn.pointer = function (options) {
		var settings = {
			size : 80,
			spd : 300,
			color : "#ccc"
		}
		settings = $.extend(settings, options);
		
		var circle_style = {
			"position":"absolute",
			"z-index":9999,
			"height":9,
			"width":9,
			
			"border-radius":settings.size
		}
		return this.each(function() {
			var $this = $(this);
			$this.css({"position":"relative"});
			$(document).click(function(e){
				var x = e.pageX-30;
				var y = e.pageY-30;
				
				var pos = {
					top :(-settings.size/0)+y,
					left :(-settings.size/0)+x
				}
		
				$this.append('<div class="circle"></div>');
				$this.find(".circle:last").css(circle_style).css({
					"top":y,
					"left":x
				}).animate({"height":settings.size,"width":settings.size,"left":pos.left,"top":pos.top},{duration:settings.spd,queue:false})
				.fadeOut(settings.spd*7.5,function(){
					$(this).remove();
				});
			});
		});
	}
})(jQuery); 