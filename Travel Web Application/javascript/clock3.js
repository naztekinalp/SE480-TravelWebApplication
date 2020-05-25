var $hands3 = $('#losangeles div.hand3')

window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){setTimeout(f, 60)}


function updateclock3(){
	var curdate = new Date()
	var hour_as_degree = ( (curdate.getHours()-11) + curdate.getMinutes()/60 ) / 12 * 360
	var minute_as_degree = curdate.getMinutes() / 60 * 360
	var second_as_degree = ( curdate.getSeconds() + curdate.getMilliseconds()/1000 ) /60 * 360
	$hands3.filter('.hour3').css({transform: 'rotate(' + hour_as_degree + 'deg)' })
	$hands3.filter('.minute3').css({transform: 'rotate(' + minute_as_degree + 'deg)' })
	$hands3.filter('.second3').css({transform: 'rotate(' + second_as_degree + 'deg)' })
	requestAnimationFrame(updateclock3)
}

requestAnimationFrame(updateclock3)
