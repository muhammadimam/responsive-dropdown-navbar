$(function() {
  // Dropdown List
  $('nav ul li > a:not(:only-child').on('click',
  function(event) {
    $(this).siblings('.nav-dropdown').toggle();
    $('.nav-dropdown').not($(this).siblings()).hide();
    event.stopPropagation();
  });

  $('html').on('click', 
  function() {
    $('.nav-dropdown').hide();
  });

  //Nav Toggle
  $('#nav-toggle').on('click',
  function() {
    this.classList.toggle('active');
    $('nav ul').toggle();
  })
});
