const callDrawerCloseButton = document.querySelector('.call-drawer-button__elem--burger');
const modalGetCall = document.querySelector('.modal__call');
const modalGetCallOpen = document.querySelectorAll('.navigation-button__elem--call');
const getCallModalDrawer = document.querySelector('.call__drawer');
const getCallCloseArea = document.querySelector('.modal__call--close-area');

function getCallModalCloseOpen() {
    window.scroll(0, 0);
    if (modalGetCall.classList.contains('modal__call--close')) {
        modalGetCall.classList.remove('modal__call--close');
        modalGetCall.classList.add('modal__call--open');
        getCallModalDrawer.classList.add('call__drawer--open');
        getCallModalDrawer.classList.remove('call__drawer--close');
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
    }
    function modalClose() {
        if (modalGetCall.classList.contains('modal__call--open')) {
            modalGetCall.classList.add('modal__call--close');
            modalGetCall.classList.remove('modal__call--open');
            getCallModalDrawer.classList.remove('call__drawer--open');
            getCallModalDrawer.classList.add('call__drawer--close');
            document.body.style.overflow = 'visible';
        }
    }
    callDrawerCloseButton.addEventListener('click', function () {
        modalClose();
    });

    getCallCloseArea.addEventListener('click', function () {
        modalClose();
    });

}

modalGetCallOpen.forEach((button) => {
    button.addEventListener('click', function () {
        getCallModalCloseOpen();
    });
});

export { getCallCloseArea, getCallModalDrawer, modalGetCallOpen, modalGetCall, callDrawerCloseButton, getCallModalCloseOpen }