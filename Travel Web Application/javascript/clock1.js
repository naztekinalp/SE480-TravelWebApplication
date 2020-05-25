var $hands1 = $('#istanbul div.hand1')

window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){setTimeout(f, 60)}


function updateclock1(){
	var curdate = new Date()
	var hour_as_degree = ( curdate.getHours() + curdate.getMinutes()/60 ) / 12 * 360
	var minute_as_degree = curdate.getMinutes() / 60 * 360
	var second_as_degree = ( curdate.getSeconds() + curdate.getMilliseconds()/1000 ) /60 * 360
	$hands1.filter('.hour1').css({transform: 'rotate(' + hour_as_degree + 'deg)' })
	$hands1.filter('.minute1').css({transform: 'rotate(' + minute_as_degree + 'deg)' })
	$hands1.filter('.second1').css({transform: 'rotate(' + second_as_degree + 'deg)' })
	requestAnimationFrame(updateclock1)
}

requestAnimationFrame(updateclock1)
