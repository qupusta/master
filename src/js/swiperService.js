const serviceSlider = document.querySelector('.service-swiper');

const serviceSwiper = new Swiper(serviceSlider, {
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
});

export { serviceSlider, serviceSwiper }