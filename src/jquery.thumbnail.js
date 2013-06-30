/**
 * version: 1.0.0
 * date: June 30, 2013
 */
(function($) {
	$.fn.thumbnail = function(options) {
		var opts = $.extend({
			size: '100px',
			margin: '2px',
		}, options);

		return this.each(function(i,div) {
			var $div = $(div);

			$div.find('img').each(function(j,img) {
				var $img = $(img);

				$img.css('width', (parseInt(opts.size) * 2) + 'px');
				$img.wrap($('<div>').css({
					width: parseInt(opts.size) + 'px',
					height: parseInt(opts.size) + 'px',
					margin: parseInt(opts.margin) + 'px',
					overflow: 'hidden',
					display: 'block',
					float: 'left'
				}));

				$img.load(function() {
					var $this = $(this);
					$this.css({
						'margin-left': (-($this.width() - parseInt(opts.size)) / 2) + 'px',
						'margin-top': (-($this.height() - parseInt(opts.size)) / 2) + 'px'
					});
				});
			});
		});
	}
}(jQuery));