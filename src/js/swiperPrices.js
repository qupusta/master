const pricesSlider = document.querySelector('.prices-swiper');

const pricesSwiper = new Swiper(pricesSlider, {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
    },
});

export { pricesSlider, pricesSwiper }