
function debounce(func, wait) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  function resizeImages(event) {
    const sliderValue = event.target.value;
    const images = document.querySelectorAll('.img1, .img2, .img3');
    const newSize = 100 + (sliderValue * 2); 
    images.forEach(image => {
      image.style.width = `${newSize}px`;
      image.style.height = `${newSize}px`;
    });
  }
  const slider = document.querySelector('.slider__input');
  slider.addEventListener('input', debounce(resizeImages, 100));
  