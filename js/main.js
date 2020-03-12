$(document).ready(function(){


  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  /*click event on toggle menu */
  $toggleCollapse.click(function(){
    $nav.toggleClass('collapse')
  })

  /* Owl-crousel for blog */

  $('.owl-carousel').owlCarousel();






});