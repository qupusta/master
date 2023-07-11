const burgerButton = document.querySelector('.navigation-button__elem--burger');
const burgerButtonClose = document.querySelector('.navigation-button__elem--burger-open')
const asideMenu = document.querySelector('.aside-wrapper')

function sideBar() {
    if (asideMenu.classList.contains('aside-wrapper--close')) {
        asideMenu.style.left = '0px';
        asideMenu.classList.remove('aside-wrapper--close');
        asideMenu.classList.add('aside-wrapper--open');
    } else if (asideMenu.classList.contains('aside-wrapper--open')) {
        asideMenu.style.left = '-700px';
        asideMenu.classList.remove('aside-wrapper--open');
        asideMenu.classList.add('aside-wrapper--close');
    }
}

burgerButton.addEventListener('click', function () {
    sideBar();
});

burgerButtonClose.addEventListener('click', function () {
    sideBar();
});

export { burgerButton, burgerButtonClose, asideMenu, sideBar }