$(document).ready(function(){

	console.log('script loaded');

	const wghtmax = 900;
	const wdthmax = 150;

	//standard sliders
	$('.axis-range').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		// console.log(value);

		const slidertype = $(this).data('type'); //get slider axis

		// console.log("--"+slidertype, value );

		$('#bigletter').css("--"+slidertype, value);

	});

	//click buttons
	$('#default').click(function(event) {
		// console.log('default clicked');
		$("#content").css({
			"--wdth": 100,
			"--wght": 400,
			"--XHGT": 0
		});
	});

	$('#thincomp').click(function(event) {
		$("#content").css({
			"--wdth": 40,
			"--wght": 100,
			"--XHGT": 0
		});
	});

  $('#lightcomp').click(function(event) {
		$("#content").css({
			"--wdth": 40,
			"--wght": 300,
			"--XHGT": 0
		});
	});

  $('#boldext').click(function(event) {
		$("#content").css({
			"--wdth": 40,
			"--wght": 700,
			"--XHGT": 0
		});
	});

	$('#blackext').click(function(event) {
		$("#content").css({
			"--wdth": 150,
			"--wght": 900,
			"--XHGT": 0
		});
	});


	$('#random').click(function(event) {
		let randomwidth = randomNumber(40,150);
		let randomwght = randomNumber(100,1200);
		let randomxhgt = randomNumber(0,100);

		$("#content").css({
			"--wdth": randomwidth,
			"--wght": randomwght,
			"--XHGT": randomxhgt,
		});
	});


	window.onload = function() {
	  var currFFZoom = 1;
	  var currIEZoom = 100;

	  $('#In').on('click', function() {
	    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6) { //Firefox
	      var step = 0.02;
	      currFFZoom += step;
	      $('body').css('MozTransform', 'scale(' + currFFZoom + ')');
	    } else {
	      var step = 2;
	      currIEZoom += step;
	      $('body').css('zoom', ' ' + currIEZoom + '%');
	    }
	  });

	  $('#Out').on('click', function() {
	    if (navigator.userAgent.indexOf('Firefox') != -1 && parseFloat(navigator.userAgent.substring(navigator.userAgent.indexOf('Firefox') + 8)) >= 3.6) { //Firefox
	      var step = 0.02;
	      currFFZoom -= step;
	      $('body').css('MozTransform', 'scale(' + currFFZoom + ')');

	    } else {
	      var step = 2;
	      currIEZoom -= step;
	      $('body').css('zoom', ' ' + currIEZoom + '%');
	    }
	  });
	};

	
