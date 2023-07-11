const serviceExpander = document.querySelector('.service-expander');
const serviceWrapper = document.querySelector('.navigation-container__service-list');
const serviceExpanderIcon = document.querySelector('.service-expander__icon');

function expandService() {
    if (serviceExpander.classList.contains('service-expander--unactive')) {
        serviceWrapper.style.overflow = 'visible'
        serviceWrapper.style.height = 'auto'
        serviceExpander.textContent = 'Скрыть'
        serviceExpander.classList.remove('service-expander--unactive')
        serviceExpander.classList.add('service-expander--active')
        serviceExpanderIcon.classList.remove('service-expander__icon--unactive');
        serviceExpanderIcon.classList.add('service-expander__icon--active');
    } else if (serviceExpander.classList.contains('service-expander--active')) {
        serviceWrapper.style.overflow = 'hidden'
        serviceWrapper.style.height = '174px'
        serviceExpander.textContent = 'Показать всё'
        serviceExpander.classList.remove('service-expander--active')
        serviceExpander.classList.add('service-expander--unactive')
        serviceExpanderIcon.classList.remove('service-expander__icon--active');
        serviceExpanderIcon.classList.add('service-expander__icon--unactive');
    }
}
serviceExpander.addEventListener('click', function () {
    expandService();
});

export { serviceExpander, serviceWrapper, serviceExpanderIcon, expandService }