
const testimonials = [
  {
    author: "MARY MAXEY",
    source: "THE GUARDIAN",
    image: "testimonial-1.jpg",
    rating: 4,
    content: `Non arcu mauris tortor ultrices mollis tellus euismod fermentum.
              Habitant amet tincidunt id sapien accumsan sed.`,
  },
  {
    author: "PATRICK MONROE",
    source: "GLOBE AND MAIL",
    image: "testimonial-2.jpg",
    rating: 5,
    content: `Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Nulla porttitor accumsan tincidunt.`,
  },
];

testimonials.map((item, index) => {
  const cardElm = document.createElement("div");

  cardElm.className = "testimonial-card";

  cardElm.style.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("./assets/images/testimonials/${item.image}") left center/cover no-repeat`;

  let starContent = "";
  for (let i = 0; i < item.rating; i++) {
    starContent += `<span class="testimonial-star">★</span>`;
  }

  cardElm.innerHTML = `<div class="testimonial-content">
            <span class="testimonial-author">${item.author}</span>
            <h2 class="testimonial-publication">${item.source}</h2>
            <div class="testimonial-stars">${starContent}</div>
            <div class="testimonial-divider"></div>
            <p class="testimonial-text">
             ${item.content}
            </p>
            <a href="#" class="testimonial-button">READ FULL ARTICLE</a>
          </div>`;

  document.getElementById("testimonials-container").appendChild(cardElm);
});
