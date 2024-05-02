/*const navShow = document.querySelector('#nav-show')
const menuShow = document.querySelector('#menu-On')
const closeShow = document.querySelector('#close-On')
const navlink = document.querySelector('.nav-link')
const navOpen = document.querySelector('.nav-open')
const menulink = document.querySelector('.menu')
const closelink = document.querySelector('.close')



menuShow.addEventListener('click', navDisplay)

function navDisplay(){
  menulink.classList.add('menu-off')
  navShow.classList.remove('nav-open')
  closeShow.classList.remove('closelink')
}*/


let navShow = document.querySelector('#nav-show')
let menuShow = document.querySelector('#menu-On')
let closeShow = document.querySelector('#close-On')


const navDisplay = (navigation, open, close) =>{
   navShow.style.display = navigation
   menuShow.style.display = open
   closeShow.style.display = close
}

menuShow.addEventListener('click', () => navDisplay('block', 'none', 'block'))
closeShow.addEventListener('click', () => navDisplay('none', 'block', 'none'))