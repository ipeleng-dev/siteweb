var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  grabCursor: true,
  mousewheel: true,
  loopFillGroupWithBlank: false,
  slidesOffsetAfter: 0,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".secondSwiper", {
  effect: "cards",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slidesOffsetAfter: 0,
  loopFillGroupBlank: false,
  centeredSlidesBounds: true,
  autoHeight: false,
});
