"use strict";$("body").scrollspy({target:"#navbar"});let nav=document.getElementById("navbar"),navLogo=document.querySelector(".navbar-brand"),navbarCollapse=document.getElementById("navbar-collapse");function navBarScroll(){let e=window.pageYOffset;e>50?(nav.classList.add("bg-light"),nav.style.top=0):0==e?nav.classList.remove("bg-light"):window.innerWidth>1200&&(nav.style.top="50px"),nav.classList.contains("bg-light")?navLogo.style.fontSize="30px":navLogo.style.fontSize="50px"}window.addEventListener("resize",function(){window.innerWidth<992?nav.classList.add("bg-light"):nav.classList.remove("bg-light")}),window.addEventListener("scroll",navBarScroll);let navbarToggler=document.querySelector(".navbar-toggler"),navbarTooglerBar=document.querySelector(".navbar-toggler__bar");navbarToggler.addEventListener("click",function(){navbarTooglerBar.classList.contains("navbar-toggler__close")?navbarTooglerBar.classList.remove("navbar-toggler__close"):navbarTooglerBar.classList.add("navbar-toggler__close")});let galleryImgBox=document.getElementsByClassName("gallery__imgBox"),galleryBtn=document.getElementById("galleryBtn");galleryBtn.addEventListener("click",function(){for(let e=5;e<galleryImgBox.length;e++)galleryImgBox[e].classList.toggle("gallery__hidden"),galleryImgBox[e].classList.contains("gallery__hidden")?galleryBtn.innerText="view more":galleryBtn.innerText="view less"});let blogCardBox=document.getElementsByClassName("blog__cardBox"),blogBtn=document.getElementById("blogBtn");blogBtn.addEventListener("click",function(){for(let e=3;e<blogCardBox.length;e++)blogCardBox[e].classList.toggle("blog__hidden"),blogCardBox[e].classList.contains("blog__hidden")?blogBtn.innerText="view more":blogBtn.innerText="view less"});