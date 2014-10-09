$(document).ready(function () {

    //navigation glyphicon on the top
    $(".navigation").hover(
      function () {
          $(this).find('.glyphicon').css('color', 'darkgreen');
      },
      function () {
          $(".glyphicon").css('color', '');
      }
    );

    //navigation glyphicon on the nav
    $("li").hover(
      function () {
          $(this).find('.glyphicon').css('color', 'darkgreen');
      },
      function () {
          $(".glyphicon").css('color', '');
      }
    );

    //for certification list in about page
    $(".certification").hover(
      function () {
          $(this).find('.glyphicon').css('color', 'darkblue');
      },
      function () {
          $(".glyphicon").css('color', '');
      }
    );
});