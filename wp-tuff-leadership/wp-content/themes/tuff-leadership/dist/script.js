const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const close = document.getElementById("close");
// const menuLink = document.getElementsByClassName("menuBox__link");
const menuLink = document.getElementsByTagName("li");
// const menuBox = document.getElementsByClassName("menuBox")[0];

for (let i = 0; menuLink.length > i; i++) {
  menuLink[i].addEventListener("click", menuClose, false);
}

function menuOpen() {
  menu.style.display = "block";
}

function menuClose() {
  menu.style.display = "none";
}

menuBtn.addEventListener("click", menuOpen, false);
close.addEventListener("click", menuClose, false);

jQuery(document).ready(function($) {
  $(".slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });
});

// $(document).ready(function() {

// });
