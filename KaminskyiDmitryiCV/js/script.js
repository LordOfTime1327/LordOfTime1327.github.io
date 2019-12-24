let body = $("body");
let menu = $("#menu");
let burger = $("#burger");
let nav = $("#nav");
let close = $(".close");
let navItem = $(".nav__item");

burger.click(e => {
  burger.toggleClass("close");
  nav.toggleClass("active");
  body.toggleClass("stop-scrolling");
});

navItem.click(e => {
  burger.removeClass("close");
  nav.removeClass("active");
  body.removeClass("stop-scrolling");
});

scrollPrev = 0;
$(window).scroll(function() {
  let scrolled = $(window).scrollTop();

  if (scrolled > 100 && scrolled > scrollPrev) {
    menu.addClass("menu_hidden menu_top");
  } else if (scrolled == 0) {
    menu.removeClass("menu_top");
  } else {
    menu.removeClass("menu_hidden");
  }
  scrollPrev = scrolled;
});

$(document).ready(function() {
  let redLineBefore = $(".redLine_before"),
    redLineMiddle = $(".redLine_middle"),
    redLineAfter = $(".redLine_after");
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 0) {
    $(".redLine_before").css({
      opacity: "1",
      left: "40%",
      transition: "all .5s ease-in-out"
    });
    $(".redLine_middle").css({
      opacity: "1",
      left: "25%",
      transition: "all .5s ease-in-out"
    });
    $(".redLine_after").css({
      opacity: "1",
      left: "40%",
      transition: "all .5s ease-in-out"
    });
  }
});

new WOW().init();

const sliderBox = document.getElementsByClassName("slider__box");
const slideTextShow = document.getElementsByClassName("slider__textShow");
let sliderBoxItem = sliderBox[0];
let textShow = slideTextShow[0];

for (let i = 0; sliderBox.length > i && slideTextShow.length > i; i++) {
  sliderBox[i].addEventListener("click", f, false);

  function f() {
    sliderBoxItem.classList.remove("fullSlide");
    sliderBox[i].classList.add("fullSlide");

    sliderBoxItem = sliderBox[i];
  }
}
