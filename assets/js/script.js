// -------------------------------------------------------
// @@@
// Scroll header
// @@@
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

// ----------------------------------------------------------
// @@@
// link nav actif
// @@@
window.addEventListener('scroll', linkActif);

function linkActif(){

  let link1 = document.getElementById("link-1");
  console.log(link1)
  let link2 = document.getElementById("link-2");
  let link3 = document.getElementById("link-3");

  let section1 = document.getElementById("1");
  let section2 = document.getElementById("2");
  let section3 = document.getElementById("3");

  var section1Cal = section1.offsetHeight+section1.offsetTop;
  var section2Cal = section2.offsetHeight+section2.offsetTop;
  var section3Cal = section3.offsetHeight+section3.offsetTop;

  let scroolY = window.scrollY;

  if(scroolY < section1Cal){
    link1.classList.add('actif');
  }
  else{
    link1.classList.remove('actif');
  }

  if (scroolY >= section1Cal && scroolY < section2Cal){
    link2.classList.add('actif');
  } 
  else{
    link2.classList.remove('actif');
  }

  if (scroolY >= section2Cal && scroolY <= section3Cal){
    link3.classList.add('actif');
  } 
  else{
    link3.classList.remove('actif');
  }
}

// ---------------------------------------------------------------
// @@@
// Menu burger
// @@@
let burger = document.querySelector(".menu-burger");
let fullScreenMenu = document.querySelector(".menu-anim");

burger.addEventListener("click", animBurger);

function animBurger() {
  burger.classList.toggle("active");
  fullScreenMenu.classList.toggle("is-active");
}

// ---------------------------------------------------------------------
// @@@
// audio
// @@@
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

// --------------------------------------------------------------------------
// @@@
// tab menu
// @@@
let item_tab = document.querySelectorAll('.item-tab');
let bar_progress = document.querySelectorAll('.bar-progress');

function change_item_actif(number){
  let item_tab_actif = document.querySelector('.item_tab_actif');
  let bar_progress_actif = document.querySelector('.actif-progress-bar');

  item_tab_actif.classList.remove('item_tab_actif');
  bar_progress_actif.classList.remove('actif-progress-bar');

  item_tab[number].classList.add('item_tab_actif');
  bar_progress[number].classList.add('actif-progress-bar');
}

item_tab.forEach(function(element, index){
  element.onclick = function () {
    change_item_actif(index);
  }
});

// item_tab[0].addEventListener('click', function() {
//   change_item_actif(0);
// })

// item_tab[1].addEventListener('click', function() {
//   change_item_actif(1);
// })

// item_tab[2].addEventListener('click', function() {
//   change_item_actif(2);
// })






