$(document).ready(function () {
    $("nav").hover(
      function () {
          $(this).find('.glyphicon').css('color', 'green');
      },
      function () {
          $(".glyphicon").css('color', '');
      }
    );

    $(".certification").hover(
      function () {
          $(this).find('.glyphicon').css('color', 'blue');
      },
      function () {
          $(".glyphicon").css('color', '');
      }
    );
});