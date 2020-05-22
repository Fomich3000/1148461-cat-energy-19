var menu = document.querySelector('.main-nav');
var toggle = document.querySelector('.main-nav__toggle');
var mapInteractive = document.querySelector('.location__map-interactive');
var mapContainer = document.querySelector('.location__map-container');

menu.classList.remove('main-nav--no-js');
menu.classList.add('main-nav--closed');

mapInteractive.classList.remove('location__map-interactive--no-js');
mapContainer.classList.remove('location__map-container--no-js');


toggle.addEventListener('click', function() {
  if (menu.classList.contains('main-nav--closed')) {
    menu.classList.remove('main-nav--closed');
    menu.classList.add('main-nav--opened');
  } else {
    menu.classList.add('main-nav--closed');
    menu.classList.remove('main-nav--opened');
  }
});
