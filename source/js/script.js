var items = document.querySelectorAll('.partners .partners__item');
var slider = new Slider(items);

    document.querySelector('.partners .control__pre').onclick = function(){
        slider.control__pre();
    }

    document.querySelector('.partners .control__next').onclick = function(){
        slider.control__next();
    }

var items2 = document.querySelectorAll('.news .news__item');
var slider2 = new Slider(items2);

    document.querySelector('.news .control__pre').onclick = function(){
        slider2.control__pre();
    }

    document.querySelector('.news .control__next').onclick = function(){
        slider2.control__next();
    }

function Slider(items) {
  this.items = items;
  var i = 0;

  this.control__pre = function () {
    this.items[i].classList.remove('active');
    i--;

    if (i < 0) {
        i = this.items.length - 1;
    }

    this.items[i].classList.add('active');
  }

  this.control__next = function () {
    this.items[i].classList.remove('active');
    i++;

    if (i >= this.items.length) {
      i = 0;
    }

    this.items[i].classList.add('active');
  }
}

// Бургем меню
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

$(document).ready(function () {

var timeList = 700;
var TimeView = 5000;
var RadioBut = true;

var slideNum = 1;
var slideTime;
slideCount = $("#slider .slide").length;

var animSlide = function(arrow){
    clearTimeout(slideTime);

    if(arrow == "next"){
    if(slideNum == slideCount) { slideNum=1; }
    else{slideNum++}
       translateWidth = -$('#active-slide').width() * (slideNum - 1);
       $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }
    else if(arrow == "prew")
    {
       if(slideNum == 1) { slideNum=slideCount; }
    else{slideNum-=1}
    translateWidth = -$('#active-slide').width() * (slideNum - 1);
       $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }else{
       slideNum = arrow;
    translateWidth = -$('#active-slide').width() * (slideNum -1);
       $('#slider').css({'transform': 'translate(' + translateWidth + 'px, 0)'});
    }

    $(".ctrl-select.active").removeClass("active");
    $('.ctrl-select').eq(slideNum - 1).addClass('active');
}
        var adderSpan = '';
        $('.slide').each(function(index) {
               adderSpan += '<span class = "ctrl-select">' + index + '</span>';
           });
        $('<div class ="Radio-But">' + adderSpan +'</div>').appendTo('#slider-wrap');
        $(".ctrl-select:first").addClass("active");
        $('.ctrl-select').click(function(){
        var goToNum = parseFloat($(this).text());
        animSlide(goToNum + 1);
        });
        var pause = false;
        var rotator = function(){
               if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeView);}
               }
        $('#slider-wrap').hover(
           function(){clearTimeout(slideTime); pause = true;},
           function(){pause = false; rotator();
           });

    var clicking = false;
    var prevX;
    $('.slide').mousedown(function(e){
        clicking = true;
        prevX = e.clientX;
    });

    $('.slide').mouseup(function() {
     clicking = false;
    });

    $(document).mouseup(function(){
        clicking = false;
    });

    $('.slide').mousemove(function(e){
        if(clicking == true)
         {
             if(e.clientX < prevX) { animSlide("next"); clearTimeout(slideTime); }
             if(e.clientX > prevX) { animSlide("prew"); clearTimeout(slideTime); }
           clicking = false;
        }
    });
});

