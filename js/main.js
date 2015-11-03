//a li'l bit
$(document).ready(function() {
  $('.navToggle6').click(function() {
    $('.navbar').toggle("slide");
    $(this).toggleClass("open");
    $(".background").toggleClass("open");
  });
});
/*carrouse*/
$('.carousel').carousel({
  interval: 2000
})