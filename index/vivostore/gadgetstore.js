let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function showSlide(index) {
  const slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  dropdownToggle.addEventListener('click', function() {
    dropdown.classList.toggle('active');
  });

  // Close the dropdown when clicking outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      dropdown.classList.remove('active');
    }
  });
});