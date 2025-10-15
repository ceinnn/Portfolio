const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navLinks.classList.toggle("active");
});

const roleTxt = "Web Developer";
const role = document.getElementsByClassName("role")[0];

function typeRole(element, text, delay = 100) {
  let i = 0;
  let interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
    }
  }, delay);
}

window.addEventListener("load", () => {
  typeRole(role, roleTxt, 150);
});

var projectsContainer = document.querySelector(".projects-cards-container");
var projectsCards = document.querySelectorAll(".projects-cards");
var dash = document.querySelectorAll(".dash");

let currentIndex = 0;

function showSlide(index) {
  projectsCards[currentIndex].classList.remove("active");
  dash[currentIndex].classList.remove("active");

  currentIndex = index;

  projectsCards[currentIndex].classList.add("active");
  dash[currentIndex].classList.add("active");

  projectsContainer.classList.remove("active-1", "active-2", "active-3");
  projectsContainer.classList.add(`active-${currentIndex + 1}`);
}

let interval = setInterval(() => {
  let nextIndex = (currentIndex + 1) % projectsCards.length;
  showSlide(nextIndex);
}, 5000);

dash.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(interval);
    showSlide(index);

    interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % projectsCards.length;
      showSlide(nextIndex);
    }, 5000);
  });
});

projectsCards.forEach((card) => {
  card.addEventListener("mouseenter", () => clearInterval(interval));

  card.addEventListener("mouseleave", () => {
    clearInterval(interval);
    interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % projectsCards.length;
      showSlide(nextIndex);
    }, 5000);
  });

  card.addEventListener("click", () => {
    clearInterval(interval);
    const index = Array.from(projectsCards).indexOf(card);
    showSlide(index);

    interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % projectsCards.length;
      showSlide(nextIndex);
    }, 5000);
  });
});

function toProjects() {
  window.location.href = "#projects";
}
