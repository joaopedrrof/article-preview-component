$('.menu-toggle').on('click', function(){
    $('.menu').toggleClass('open')
    $('section').toggleClass('blur-me')
return false
})


$(document).on("click", function (event) {

    if (($(event.target).closest(".menu").length === 0) && $('.menu').hasClass('open') ) {
      $('.menu').removeClass('open');
      $('section').removeClass('blur-me')
    }
  
  });
