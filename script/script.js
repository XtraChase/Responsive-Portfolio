//Mobile Site Navigation
//tutorial source https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //const navigate = document.querySelector(".navigate");

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active"); //bug: should get the background color not the @media screen nav-links. Otherwise will jump when dragging from desktop to mobile.

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 +
          0.3}s`;
      }
    });
    //Burger Animation
    burger.classList.toggle("toggle");
    // navigate.style.
  });
};

navSlide();
