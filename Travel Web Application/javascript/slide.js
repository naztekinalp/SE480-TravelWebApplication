
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .next()
    .end()
    .appendTo('#slideshow');
},  3000);
