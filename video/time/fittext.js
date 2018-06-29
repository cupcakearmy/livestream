/*global jQuery */
/*!
 * FitText.js 1.2
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 * Modified by Niccolo Borgioli github.com/cupcakearmy
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */

((window) => {
	window.fittext = (element, kompressor, options) => {

		const compressor = kompressor || 1,
			settings = Object.assign({
				'minFontSize': Number.NEGATIVE_INFINITY,
				'maxFontSize': Number.POSITIVE_INFINITY
			}, options)

		const resizer = () => element.style.fontSize = `${Math.max(Math.min(element.offsetWidth / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize))}px`

		resizer()
		window.addEventListener('resize', resizer)

	}

	window.textfill = (element, options) => {
		const ourText = element.querySelector('span');
		const maxHeight = element.offsetHeight;
		const maxWidth = element.offsetWidth;



		let fontSize = Number.POSITIVE_INFINITY;
		let textHeight;
		let textWidth;

		const resizer = () => {
			do {
				ourText.style.fontSize = `${fontSize}px`
				textHeight = ourText.offsetHeight
				textWidth = ourText.offsetWidth
				fontSize = fontSize - 1
			} while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3)
		}
		resizer()
	}
})(window)