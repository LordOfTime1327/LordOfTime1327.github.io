let html=document.querySelector("html"),nav=document.getElementById("nav"),menu=document.getElementById("menu"),burgerBtn=document.getElementById("burgerBtn"),menuCloseBtn=document.getElementById("menuCloseBtn"),menuLink=document.getElementsByClassName("menu__link"),logo=document.getElementById("logo");burgerBtn.addEventListener("click",function(){menuOpen()}),menuCloseBtn.addEventListener("click",function(){menuClose()});for(let e=0;e<menuLink.length;e++)menuLink[e].addEventListener("click",menuClose);function menuOpen(){menu.classList.add("menu_open"),html.classList.add("stop-scrolling")}function menuClose(){menu.classList.remove("menu_open"),html.classList.remove("stop-scrolling")}function navBarScroll(){let e=window.pageYOffset;e>100?nav.classList.add("nav_hide","nav_scrolled"):0==e?nav.classList.remove("nav_scrolled"):nav.classList.remove("nav_hide"),nav.classList.contains("nav_scrolled")?logo.style.width="35px":logo.style.width="50px"}function teamSliderImg(){let e=document.getElementsByClassName("teamSlider__img");for(let s=0;s<e.length;s++)e[s].style.height=e[s].offsetWidth+"px",e[s].style.marginBottom="-"+e[s].offsetHeight/2+"px"}window.addEventListener("scroll",navBarScroll),$("#worksSlider").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,arrows:!0,prevArrow:'<img src="../img/arrow_prev.png" class="slick-prev"/>',nextArrow:'<img src="../img/arrow_next.png" class="slick-next"/>',dots:!0,infinite:!0,speed:700,cssEase:"linear",pauseOnHover:!0,pauseOnDotsHover:!0,pauseOnFocus:!0,touchMove:!0,responsive:[{breakpoint:1200,settings:{arrows:!1}}]}),$("#teamSlider").slick({slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:4e3,arrows:!0,prevArrow:'<img src="../img/arrow_prev_dark.png" class="slick-prev"/>',nextArrow:'<img src="../img/arrow_next_dark.png" class="slick-next"/>',infinite:!0,speed:700,cssEase:"linear",pauseOnHover:!0,pauseOnDotsHover:!0,pauseOnFocus:!0,touchMove:!0,adaptiveHeighth:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:900,settings:{slidesToShow:2,arrows:!1}},{breakpoint:570,settings:{slidesToShow:1,arrows:!1}}]}),window.addEventListener("resize",teamSliderImg),window.addEventListener("load",teamSliderImg);