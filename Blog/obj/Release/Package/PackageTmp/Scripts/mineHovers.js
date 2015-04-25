$(document).ready(function () {

    //change glyphicon color and animate it on hover
    $(".navigation").hover(
      function () {
          $(this).find('.glyphicon').css('color', 'darkgreen');
          $(this).find('.glyphicon').addClass('animated rubberBand');
      },
      function () {
          $(".glyphicon").css('color', '');
          $(this).find('.glyphicon').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', $(this).find('.glyphicon').removeClass('animated rubberBand'));
      }
    );

    //links
    $(".animate-img").hover(
      function () {
          $(this).find('img').addClass('animated tada');
      },
      function () {
          $(this).find('img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', $(this).find('img').removeClass('animated tada'));
      }
    );

    //social
    $(".animate-badge").hover(
      function () {
          $(this).addClass('animated tada');
      },
      function () {
          $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', $(this).removeClass('animated tada'));
      }
    );

    //for certification list in about page (small one)
    $(".certification").hover(
      function () {
          $(this).find('.glyphicon').css('color', 'darkblue');
          $(this).find('.glyphicon').addClass('animated flipInX');
      },
      function () {
          $(".glyphicon").css('color', '');
          $('.glyphicon').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', $('.glyphicon').removeClass('animated flipInX'));
      }
    );

    //wow
    new WOW().init();
});