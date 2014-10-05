$(document).ready(function () {
    $("nav").hover(
  function () {
      $(this).find('.glyphicon').css('color', 'red');
  },
  function () {
      $(".glyphicon").css('color', '');
  }
);
});