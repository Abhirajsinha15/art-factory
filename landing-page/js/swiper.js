var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  pagination: {
el: ".swiper-pagination",
clickable: true,
type: "bullets",
dynamicBullets: false, // Disable dynamic bullets
},
navigation: {
nextEl: ".right-arrow", // Reference your existing button class
prevEl: ".left-arrow", // Reference your existing button class
},
});

