// Sample data for cards
const data = [
  { title: "Feature 1", description: "This is the description for feature 1." },
  { title: "Feature 2", description: "This is the description for feature 2." },
  { title: "Feature 3", description: "This is the description for feature 3." },
  { title: "Feature 4", description: "This is the description for feature 4." }
];

// Populate cards dynamically
const cardsContainer = document.getElementById("cards-container");

data.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  `;
  cardsContainer.appendChild(card);
});

// Button interaction
const ctaBtn = document.getElementById("cta-btn");
ctaBtn.addEventListener("click", () => {
  alert("Button Clicked! 🎉");
});
