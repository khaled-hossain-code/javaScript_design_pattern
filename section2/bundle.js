'use strict';

(function (win, $) {
	var circleGeneratorSingleton = function () {
		var instance = void 0;

		function init() {
			var _aCircle = [],
			    _stage = $('.advert');

			function createCircle(left, top) {
				var circle = $('<div class="circle"></div>');
				_positionCircle(circle, left, top);
				return circle;
			}

			function _positionCircle(circle, left, top) {
				circle.css('left', left);
				circle.css('top', top);
			}

			function addCircle(circle) {
				_stage.append(circle);
				_aCircle.push(circle);
			}

			function index() {
				return _aCircle.length;
			}

			return {
				index: index,
				createCircle: createCircle,
				addCircle: addCircle
			};
		}

		return {
			getInstance: function getInstance() {
				if (!instance) {
					instance = init();
				}

				return instance;
			}
		};
	}();

	$(win.document).ready(function () {
		$('.advert').click(function (e) {
			var circleGenerator = circleGeneratorSingleton.getInstance();
			var circle = circleGenerator.createCircle(e.pageX - 25, e.pageY - 25);

			circleGenerator.addCircle(circle);
		});

		$(document).keypress(function (e) {
			if (e.key == 'a') {
				var circleGenerator = circleGeneratorSingleton.getInstance();
				var circle = circleGenerator.createCircle(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600));
				circleGenerator.addCircle(circle);
			}
		});
	});
})(window, jQuery);
