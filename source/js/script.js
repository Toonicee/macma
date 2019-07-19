var btn_prev = document.querySelector('.partners .control__pre');
var btn_next = document.querySelector('.partners .control__next');
var partners = document.querySelectorAll('.partners .partners__item');
var i = 0;

  btn_prev.onclick = function(e){
    partners[i].classList.remove('active');
      i--;

      if(i < 0){
        i = partners.length - 1;
      }

      partners[i].classList.add('active');
      }

  btn_next.onclick = function(){
    partners[i].classList.remove('active');
      i++;

      if(i >= partners.length){
        i = 0;
      }

      partners[i].classList.add('active');
    }


var pageHeaderTop = document.querySelector('.page-header__inner--top');
var pageHeaderBtm = document.querySelector('.page-header__inner--btm');
var toggleTop = document.querySelector('.toggle--top');
var toggleBtm = document.querySelector('.toggle--btm');

  toggleTop.addEventListener('click', function() {
    if (pageHeaderTop.classList.contains('toggle-active')) {
      pageHeaderTop.classList.remove('toggle-active');
      toggleTop.classList.remove('toggle-open');
    } else {
      pageHeaderTop.classList.add('toggle-active');
      toggleTop.classList.add('toggle-open');
    }
  });

  toggleBtm.addEventListener('click', function(e) {
    if (pageHeaderBtm.classList.contains('toggle-active')) {
      pageHeaderBtm.classList.remove('toggle-active');
      toggleBtm.classList.remove('toggle-open');
    } else {
      pageHeaderBtm.classList.add('toggle-active');
      toggleBtm.classList.add('toggle-open');
    }
  });
