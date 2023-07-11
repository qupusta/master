const slider = document.querySelector('.swiper');

const swiper = new Swiper(slider, {
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
});


export { slider, swiper }