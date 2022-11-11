
const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


let y = document.querySelector(".swiper")   
y.addEventListener("mouseenter", show);
function show() {
  document.querySelector(".swiper-button-next").style.visibility = "visible";
  document.querySelector(".swiper-button-prev").style.visibility = "visible";
}
y.addEventListener("mouseleave", function() {
  document.querySelector(".swiper-button-next").style.visibility = "hidden";
  document.querySelector(".swiper-button-prev").style.visibility = "hidden";
});