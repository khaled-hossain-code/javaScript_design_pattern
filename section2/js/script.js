(function(win, $){
	const circleGeneratorSingleton = (function () {
		let instance;

		function init(){
			const _aCircle = [],
						_stage = $('.advert');
			
			function createCircle (left, top) {
				const circle = $('<div class="circle"></div>');
				_positionCircle(circle, left, top);
				return circle;
			}

			function _positionCircle (circle, left, top) {
				circle.css('left', left);
				circle.css('top', top);
			}

			function addCircle (circle){
				_stage.append(circle);
				_aCircle.push(circle);
			}

			function index(){
				return _aCircle.length;
			}

			return {
				index,
				createCircle,
				addCircle
			}
		}

		return {
			getInstance: function (){
				if(!instance){
					instance = init();
				}

				return instance;
			}
		}
	})();

	$(win.document).ready(function(){
		$('.advert').click(function(e){
			const circleGenerator = circleGeneratorSingleton.getInstance();
			const circle = circleGenerator.createCircle(e.pageX-25, e.pageY-25);

			circleGenerator.addCircle(circle);
		});

		$(document).keypress(function(e){
			if(e.key == 'a') {
				const circleGenerator = circleGeneratorSingleton.getInstance();
				const circle = circleGenerator.createCircle(Math.floor(Math.random() * 600), Math.floor(Math.random() * 600));
				circleGenerator.addCircle(circle);
			}
		});
	});

})(window, jQuery);