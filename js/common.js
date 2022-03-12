const menuBar = document.querySelector('header .menu-bar');
const subMenu = document.querySelector('header .sub-menu');
let isHideMenu = true;
menuBar.addEventListener('click', function () {
  isHideMenu = !isHideMenu
  if (isHideMenu) {
    subMenu.classList.add('hide')
  } else {
    subMenu.classList.remove('hide')
  }
})