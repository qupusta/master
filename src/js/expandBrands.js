const brandsExpander = document.querySelector('.brands-expander');
const brandsWrapper = document.querySelector('.navigation-container__brands-list');
const brandsExpanderIcon = document.querySelector('.brands-expander__icon')

function expandBrands() {
    if (brandsExpander.classList.contains('brands-expander--unactive')) {
        brandsWrapper.classList.remove('navigation-container__brands-list--close');
        brandsWrapper.classList.add('navigation-container__brands-list--open');
        brandsExpander.textContent = 'Скрыть';
        brandsExpander.classList.remove('brands-expander--unactive');
        brandsExpander.classList.add('brands-expander--active');
        brandsExpanderIcon.classList.remove('brands-expander__icon--unactive');
        brandsExpanderIcon.classList.add('brands-expander__icon--active');
    } else if (brandsExpander.classList.contains('brands-expander--active')) {
        brandsWrapper.classList.remove('navigation-container__brands-list--open')
        brandsWrapper.classList.add('navigation-container__brands-list--close');
        brandsExpander.textContent = 'Показать всё';
        brandsExpander.classList.remove('brands-expander--active');
        brandsExpander.classList.add('brands-expander--unactive');
        brandsExpanderIcon.classList.remove('brands-expander__icon--active');
        brandsExpanderIcon.classList.add('brands-expander__icon--unactive');
    }
}
brandsExpander.addEventListener('click', function () {
    expandBrands();
});

export { brandsExpander, brandsWrapper, brandsExpanderIcon, expandBrands }