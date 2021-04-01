var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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

//modals
document
  .getElementById("italesse-modal-toggle")
  .addEventListener("click", () => {
    document.getElementById("italesse-modal").style.display = "block";
  });

document
  .getElementById("italesse-modal-close")
  .addEventListener("click", () => {
    document.getElementById("italesse-modal").style.display = "none";
  });

document.getElementById("thrill-modal-toggle").addEventListener("click", () => {
  document.getElementById("thrill-modal").style.display = "block";
});

document.getElementById("thrill-modal-close").addEventListener("click", () => {
  document.getElementById("thrill-modal").style.display = "none";
});

document.getElementById("pivo-modal-toggle").addEventListener("click", () => {
  document.getElementById("pivo-modal").style.display = "block";
});

document.getElementById("pivo-modal-close").addEventListener("click", () => {
  document.getElementById("pivo-modal").style.display = "none";
});

document
  .getElementById("hedonist-modal-toggle")
  .addEventListener("click", () => {
    document.getElementById("hedonist-modal").style.display = "block";
  });

document
  .getElementById("hedonist-modal-close")
  .addEventListener("click", () => {
    document.getElementById("hedonist-modal").style.display = "none";
  });

window.onclick = function (event) {
  switch (event.target) {
    case document.getElementById("italesse-modal"): {
      document.getElementById("italesse-modal").style.display = "none";
      break;
    }
    case document.getElementById("thrill-modal"): {
      document.getElementById("thrill-modal").style.display = "none";
      break;
    }
    case document.getElementById("pivo-modal"): {
      document.getElementById("pivo-modal").style.display = "none";
      break;
    }
    case document.getElementById("hedonist-modal"): {
      document.getElementById("hedonist-modal").style.display = "none";
      break;
    }
  }
};
