$(function() {

	$('article h2').each(function(ind, elm) {

		var $elm = $(elm);
		$('<a href="#">Show example <i class="material-icons round">code</i></a>').addClass('btn')
			.prependTo($elm)
			.on("click", function(e) {
				e.preventDefault();

				$elm.parent('article').find('.example-code').toggleClass('visible');
				$(e.delegateTarget).toggleClass('active');
			});

	});

});
