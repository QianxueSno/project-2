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
			"--wdth": 40,
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
			"--wdth": 100,
			"--wght": 300,
			"--XHGT": 0
		});
	});

	$('#boldext').click(function(event) {
		$("#content").css({
			"--wdth": 130,
			"--wght": 600,
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
		let randomwght = randomNumber(100,900);
		let randomxhgt = randomNumber(0,100);

		$("#content").css({
			"--wdth": randomwidth,
			"--wght": randomwght,
			"--XHGT": randomxhgt,
		});
	});


	//mouseposition
	$('#intro').mousemove(function(event) {

		console.log(event.pageX, event.pageY);

		let cursorX = event.pageX / $(this).width();
		let cursorY = 1 - (event.pageY) / $(this).height();

		let settingX = Math.floor(cursorX * wdthmax);
		let settingY = Math.floor(cursorY * wghtmax);

		// console.log( settingX, settingY)

		$("#bigletter").css({
			"--wdth": settingX,
			"--wght": settingY
		});

	});
});


// Function to generate random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


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


//movingmoney

$(document).ready(function() {
    animateDiv($('.a'));
        animateDiv($('.b'));
        animateDiv($('.c'));

});

function makeNewPosition($container1) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container1.height() - 50;
    var w = $container1.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}

//scroll

$(document).ready(function() {
    var marquee = $('div.marquee');
    console.log(marquee);
    marquee.each(function() {
        var mar = $(this),indent = mar.width();
        mar.marquee = function() {
            indent--;
            mar.css('text-indent',indent);
            if (indent < -1 * mar.children('div.marquee-text').width()) {
                indent = mar.width();
            }
        };
        mar.data('interval',setInterval(mar.marquee,1000/180));
    });
});


//moves

$(document).ready(function() {
    animateDiv($('.a'));
        animateDiv($('.b'));
        animateDiv($('.c'));

});

function makeNewPosition($container) {

    var h = $container.height() - 50;
    var w = $container.width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}

//Make the DIV element draggagle:
dragElement(document.getElementById("www1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
