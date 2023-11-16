$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});



$(function() {
    var hash = document.location.hash;
    if (hash.length>1 && $(hash).length){ 
        $('html, body').animate({
            scrollTop: $(hash).offset().top-45
        }, 0);
    }
});


