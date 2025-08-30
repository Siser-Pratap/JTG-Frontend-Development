const container = document.getElementById("testimonialContainer");
const dotsContainer = document.getElementById("dots");
const cards = document.querySelectorAll(".testimonial-card");

let index = 0;
const visibleCards = 3; // Number of cards to show at once on desktop
const totalCards = cards.length;

// Create dots dynamically
for (let i = 0; i < Math.ceil(totalCards - visibleCards + 1); i++) {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
}

// Update Carousel & Active Dot
function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 32; // card width + gap
  container.scrollTo({
    left: index * cardWidth,
    behavior: "smooth",
  });

  const dots = dotsContainer.querySelectorAll("span");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Auto Slide Every 4s
setInterval(() => {
  index = (index + 1) % Math.ceil(totalCards - visibleCards + 1);
  updateCarousel();
}, 4000);

// Initialize
updateCarousel();
