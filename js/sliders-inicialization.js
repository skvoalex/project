document.addEventListener('DOMContentLoaded', () => {
    new ItcSimpleSlider('#slider-1', {
      loop: true,
      autoplay: true,
      interval: 10000,
      swipe: true,
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    new ItcSimpleSlider('#slider-2', {
      loop: true,
      autoplay: true,
      interval: 5000,
      swipe: false,
    });
  });