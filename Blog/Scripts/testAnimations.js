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

    $('.nav li a').on('click', function () {
        $(this).parent().parent().find('.active').removeClass('active');
        $(this).parent().addClass('active');
    });
});