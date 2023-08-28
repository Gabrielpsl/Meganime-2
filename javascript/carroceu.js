const carousel = document.querySelector('.carousel');
let currentPosition = 0;

function slide(direction) {
  const imageWidth = carousel.querySelector('img').clientWidth;
  currentPosition += direction * imageWidth;
  carousel.style.transform = `translateX(-${currentPosition}px)`;
  console.log("chegou aqui");
}

setInterval(() => {
  slide(1); // Slide automático a cada 3 segundos
}, 5000);
