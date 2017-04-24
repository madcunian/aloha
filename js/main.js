$(function() {

  // Scroll down smoothly

  $('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true
});

  $(function() {
  $('.sign-up-form').on('submit', function (event) {
    event.preventDefault();
    if ( $('#sign-up').val() == '' ) {
      alert('Please enter your email.');
    } else {
      alert('Thank you!');
    }
  });
});

});