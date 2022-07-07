var metaViewport = document.getElementById("viewport");
window.onload = function () {
  if (screen.width > 420) {
    metaViewport.setAttribute("content", "user-scalable=no,width=420");
  }
  if (screen.width < 420) {
    metaViewport.setAttribute("content", "user-scalable=no,width=420");
  }
};

// slider
let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(
    ".container_inner-detail-product-slider-img"
  );

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
