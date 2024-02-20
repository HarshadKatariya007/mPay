var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	loop: true,
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
	spaceBetween: -100,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 800,
		modifier: 1,
		slideShadows: false
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".next-btn",
		prevEl: ".prev-btn"
	},
});