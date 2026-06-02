var menuBtn = document.getElementById('menuBtn');
var globalNav = document.getElementById('globalNav');

menuBtn.addEventListener('click', function(){

  menuBtn.classList.toggle('is-open');
  globalNav.classList.toggle('is-open');

});