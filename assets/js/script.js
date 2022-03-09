// Scroll header

let contentHeader = document.querySelector('.content-header');

window.addEventListener('scroll', addClassScroll);

function addClassScroll(){
  if(window.scrollY > 20){
    contentHeader.classList.add('scroll');
  }
  else{
    contentHeader.classList.remove('scroll');
  }
}
addClassScroll();

// Menu burger

let burger = document.querySelector(".menu-burger");
let fullScreenMenu = document.querySelector(".menu-anim");

burger.addEventListener("click", animBurger);

function animBurger() {
  burger.classList.toggle("active");
  fullScreenMenu.classList.toggle("is-active");
}

// audio

let song = document.querySelector(".my-song");

let iconSound = document.querySelector(".circle-icon-sound");

iconSound.addEventListener("click", getSound);

function getSound() {
  if (song.paused) {
    song.play();
    iconSound.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
  } else {
    song.pause();
    iconSound.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
  }
}
