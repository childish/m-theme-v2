$(".main_content_nav_m").addClass("hide");
$(document).ready(function() {

	// Google Analytics 
	if(location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-46746856-1', 'mackenzie.io');
    ga('send', 'pageview');
	};

	// Mobile Navigation
	$(".main_content_nav_m").addClass("hide").before('<div class="nav_small_m"><span class="icon-list"></span></div>');
	$(".nav_small_m").click(function(){
		$(".main_content_nav_m").slideToggle(750);
	});
	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$(".main_content_nav_m").removeAttr("style");
		}
	});

	// SVG Logo Fallback

	if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
	}

	// Pagination 
	var $pagination = $('.pagination');

	$pagination
	.find('.older')
	.on('click', function(event) {

		event.preventDefault();

		var $this = $(this);

		$.ajax($this.attr('href'))
		.done(function(data) {

			var $dummy = $('<div></div>').html(data),
				$postExcerpts = $dummy.find('.post-excerpt'),
				$older = $dummy.find('.pagination .older');

			$postExcerpts.insertBefore($pagination);

			$this.attr('href', $older.attr('href'));

			if(!$older.length) $this.remove();
		});
	});
});