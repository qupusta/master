const feedbackDrawerCloseButton = document.querySelector('.feedback-drawer-button__elem--burger');
const modalCallbackOpen = document.querySelectorAll('.navigation-button__elem--chat');
const modalCallback = document.querySelector('.modal__feedback');
const feedbackModalDrawer = document.querySelector('.feedback__drawer');
const feedbackCloseArea = document.querySelector('.modal__feedback--close-area');

function feedbackModalCloseOpen() {
    window.scroll(0, 0);
    if (modalCallback.classList.contains('modal__feedback--close')) {
        modalCallback.classList.remove('modal__feedback--close');
        modalCallback.classList.add('modal__feedback--open');
        feedbackModalDrawer.classList.add('feedback__drawer--open');
        feedbackModalDrawer.classList.remove('feedback__drawer--close');
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
    }
    function modalClose() {
        if (modalCallback.classList.contains('modal__feedback--open')) {
            modalCallback.classList.add('modal__feedback--close');
            modalCallback.classList.remove('modal__feedback--open');
            feedbackModalDrawer.classList.remove('feedback__drawer--open');
            feedbackModalDrawer.classList.add('feedback__drawer--close');
            document.body.style.overflow = 'visible';
        }
    }
    feedbackDrawerCloseButton.addEventListener('click', function () {
        modalClose();
    });

    feedbackCloseArea.addEventListener('click', function () {
        modalClose();
    });

};

modalCallbackOpen.forEach((button) => {
    button.addEventListener('click', function (e) {
        feedbackModalCloseOpen();
        e.stopPropagation();
    });
});

export { feedbackCloseArea, feedbackModalDrawer, modalCallback, modalCallbackOpen, feedbackDrawerCloseButton, feedbackModalCloseOpen }