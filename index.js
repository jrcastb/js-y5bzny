// Import stylesheets
import './style.css';

// Write Javascript code!
/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $('nav').addClass('fixed-header');
    $('nav div').addClass('visible-title');
  } else {
    $('nav').removeClass('fixed-header');
    $('nav div').removeClass('visible-title');
  }
});
