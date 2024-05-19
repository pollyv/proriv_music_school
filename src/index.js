import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/main.scss";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".slider-teacher", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  modules: [Navigation, Pagination],
});

document.addEventListener("DOMContentLoaded", function () {
  const acc = document.querySelectorAll(".accordeon__btn");

  acc.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.classList.remove("active");
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.classList.add("active");
      }
    });
  });
});
