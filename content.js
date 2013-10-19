$(function () {
	var delay = (function () {
		var timer = 0;
		return function (callback, ms) {
			clearTimeout(timer);
			timer = setTimeout(callback, ms);
		};
	})();
	var allInputs = $(":password");
	if (allInputs.length > 0) {
		var pwd = ($(allInputs).attr('id'))
	}

	$('#' + pwd).keydown(function () {
		//document.getElementById("" + pwd).type = 'text'
		delay(function () {
			document.getElementById("" + pwd).type = 'text'

		}, 10);
	});
	$('#' + pwd).keyup(function () {
		//document.getElementById("" + pwd).type = 'password'
		delay(function () {
			document.getElementById("" + pwd).type = 'password'
		}, 100);
	});

	$('#' + pwd).mouseover(function () {
		document.getElementById("" + pwd).type = 'text'

	})

	$('#' + pwd).mouseout(function () {
		document.getElementById("" + pwd).type = 'password'

	})

});
