//Mobile Site Navigation
//tutorial source https://www.youtube.com/watch?v=gXkqy0b4M5g
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
  
    burger.addEventListener("click", () => {
      //Toggle nav
      nav.classList.toggle("nav-active");
  
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
    });
  };
  
  navSlide();
  