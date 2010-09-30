/*
 * jQuery "JustCopy" clipboard plug-in 0.1
 *
 * http://blog.justprofessionals.com/just-professionals/BLOG POST WILL GO HERE
 * Copyright (c) 2010 Jeremy Woertink
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */
(function($) {
	$.extend($.fn, {
		justcopy: function() {
			var options = arguments[0] || {};
			var text = options['text'] || $(this).text();
			var flashPath = options['flashPath'] || 'clipboard.swf';
			var callback = options['complete'] || new Function();
			
			// IEEEEeeeee
			if(window.clipboardData) {
				window.clipboardData.setData('Text', text);
			} else {
				var embed = '<embed src="'+flashPath+'" FlashVars="clipboard='+encodeURIComponent(text)+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
				$('body').append(embed);
			}
			callback();
		}	
	});
})(jQuery);