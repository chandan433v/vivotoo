const sourceImages = document.querySelectorAll('.source-image');
const targetImages = document.querySelectorAll('.target-image');

sourceImages.forEach(function(sourceImage) {
  sourceImage.addEventListener('mouseover', function() {
    const imageUrl = sourceImage.getAttribute('src');
    targetImages.forEach(function(targetImage) {
      targetImage.style.backgroundImage = `url(${imageUrl})`;
    });
  });

  sourceImage.addEventListener('mouseout', function() {
    targetImages.forEach(function(targetImage) {
      targetImage.style.backgroundImage = '';
    });
  });
});