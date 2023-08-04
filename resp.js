burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.right-nav');
leftnav = document.querySelector('.left-nav');


burger.addEventListener('click',()=>{
    leftnav.classList.toggle('v-class-resp');
    rightnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');

})