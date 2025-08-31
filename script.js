const testimonialContainer = document.getElementById('testimonialContainer');
const testimonialCards = testimonialContainer.querySelectorAll('.testimonial-card');
const dotsContainer = document.getElementById('dots');

let currentIndex = 0;
const visibleCards = 3;
const totalCards = testimonialCards.length;
const maxIndex = Math.max(0, totalCards - visibleCards);

function scrollToIndex(index) {
  const card = testimonialCards[index];
  if (card) {
    const left = card.offsetLeft - testimonialContainer.offsetLeft;
    testimonialContainer.scrollTo({
      left: left,
      behavior: 'smooth'
    });
  }
  updateDots(index);
}

function createDots() {
  dotsContainer.innerHTML = '';
  const dotCount = 5;
  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = i;
      scrollToIndex(currentIndex);
    });
    dotsContainer.appendChild(dot);
  }
}

function updateDots(index) {
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}


setInterval(() => {
  currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
  scrollToIndex(currentIndex);
}, 4000);


createDots();
scrollToIndex(currentIndex);
