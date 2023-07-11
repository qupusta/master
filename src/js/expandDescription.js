const descriptionExpander = document.querySelector('.description-expander');
const descriptionWrapper = document.querySelector('.description__wrapper');

function descriptionExpand() {
    if (!descriptionWrapper.classList.contains('description__wrapper--open')) {
        descriptionWrapper.classList.add('description__wrapper--open');
        descriptionExpander.textContent = 'Скрыть'
        descriptionExpander.classList.add('text-expander--active')
    } else if (descriptionWrapper.classList.contains('description__wrapper--open')) {
        descriptionWrapper.classList.remove('description__wrapper--open');
        descriptionExpander.textContent = 'Читать далее';
        descriptionExpander.classList.remove('text-expander--active')
    }
}

descriptionExpander.addEventListener('click', function () {
    descriptionExpand();
});

export { descriptionExpander, descriptionWrapper, descriptionExpand };