/*=============
  Splash Screen
  =============*/

$(document).ready(function() {
  $(".title").lettering();
  $(".enter").lettering();
});


$(document).ready(function() {
  animation();
}, 1000);


function animation() {
  var title1 = new TimelineMax();
  title1.to(".enter", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".enter", 0.2, {visibility: 'visible' ,opacity: 1})
}

$('.enter').click(function () {
    $('#splashscreen').fadeOut(500);
    $('footer').fadeIn(500);
});

/*======
  Footer
  ======*/

var year = new Date().getFullYear();
document.getElementById("copyright").innerHTML = "© " + year + " Holly Ham";
