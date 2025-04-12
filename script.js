document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  header.appendChild(hamburger);

  const navbar = document.querySelector("#navbar");
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});
