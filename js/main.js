$(function() {
  
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -125
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
  });


  $('.sign-up-form').on('submit', function (event) {
    event.preventDefault();
    if ( $('#sign-up').val() == '' ) {
      alert('Please enter your email.');
    } else {
      alert('Thank you!');
    }
  });


  var itemCount = 0;

  $('.add').click(function (){
    itemCount ++;
    $('.itemCount').html(itemCount).css('display', 'block');
  }); 

});