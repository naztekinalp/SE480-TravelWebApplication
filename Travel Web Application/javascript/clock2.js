var $hands2 = $('#london div.hand2')

window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){setTimeout(f, 60)}


function updateclock2(){
	var curdate = new Date()
	var hour_as_degree = ((curdate.getHours()-3) + curdate.getMinutes()/60 ) / 12 * 360
	var minute_as_degree = curdate.getMinutes() / 60 * 360
	var second_as_degree = ( curdate.getSeconds() + curdate.getMilliseconds()/1000 ) /60 * 360
	$hands2.filter('.hour2').css({transform: 'rotate(' + hour_as_degree + 'deg)' })
	$hands2.filter('.minute2').css({transform: 'rotate(' + minute_as_degree + 'deg)' })
	$hands2.filter('.second2').css({transform: 'rotate(' + second_as_degree + 'deg)' })
	requestAnimationFrame(updateclock2)
}

requestAnimationFrame(updateclock2)
