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
  if(window.scrollY > 6100){
    contentHeader.classList.add('change_color_black');
  }
  else{
    contentHeader.classList.remove('change_color_black');
  }
}

// ----------------------------------------------------------
// @@@
// link nav actif
// @@@
window.addEventListener('scroll', linkActif);

function linkActif(){

  let link1 = document.getElementById("link-1");
  let link2 = document.getElementById("link-2");
  let link3 = document.getElementById("link-3");
  let link4 = document.getElementById("link-4");
  let link5 = document.getElementById("link-5");

  let section1 = document.getElementById("1");
  let section2 = document.getElementById("2");
  let section3 = document.getElementById("3");
  let section4 = document.getElementById("4");
  let section5 = document.getElementById("5");

  let landmark1 = document.getElementById("landmark1");
  let landmark2 = document.getElementById("landmark2");
  let landmark3 = document.getElementById("landmark3");
  let landmark4 = document.getElementById("landmark4");

  var section1Cal = section1.offsetHeight+section1.offsetTop - 100;
  var section2Cal = section2.offsetHeight+section2.offsetTop - 100;
  var section3Cal = section3.offsetHeight+section3.offsetTop - 100;
  var section4Cal = section4.offsetHeight+section4.offsetTop - 100;
  var section5Cal = section5.offsetHeight+section5.offsetTop - 1020;

  let scroolY = window.scrollY;


  if(scroolY < section1Cal){
    link1.classList.add('actif');
  }
  else{
    link1.classList.remove('actif');
  }

  if (scroolY >= section1Cal && scroolY < section2Cal){
    link2.classList.add('actif');
    landmark1.classList.add('defined');
  } 
  else{
    link2.classList.remove('actif');
    landmark1.classList.remove('defined');
  }

  if (scroolY >= section2Cal && scroolY <= section3Cal){
    link3.classList.add('actif');
    landmark2.classList.add('defined');
  } 
  else{
    link3.classList.remove('actif');
    landmark2.classList.remove('defined');
  }

  if (scroolY >= section3Cal && scroolY < section4Cal){
    link4.classList.add('actif');
    landmark3.classList.add('defined');
  } 
  else{
    link4.classList.remove('actif');
    landmark3.classList.remove('defined');
  }

  if (scroolY >= section5Cal){
    link5.classList.add('actif');
    link4.classList.remove('actif');
    landmark4.classList.add('defined');
    landmark3.classList.remove('defined');
  } 
  else{
    link5.classList.remove('actif');
    landmark4.classList.remove('defined');
  }
}

// ---------------------------------------------------------------
// @@@
// Menu burger
// @@@
let burger = document.querySelector(".menu-burger");
let fullScreenMenu = document.querySelector(".menu-anim");
let menu_link = document.querySelectorAll('.menu-link');

// Fontion qui gere l'affichage du menu mobile
burger.addEventListener("click", animBurger);

function animBurger() {
  burger.classList.toggle("active");
  fullScreenMenu.classList.toggle("is-active");
}

// Function qui cache le menu mobile une fois avoir cliquer sur un lien
menu_link.forEach(function(item){
  if(item.onclick = function(){
    fullScreenMenu.classList.toggle('is-active');
    burger.classList.remove("active");
  });
})

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






