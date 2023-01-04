nav = document.getElementById("nav");
hero = document.getElementById("hero");
open = document.getElementById("open");
close = document.getElementById("close");

openNav = () => {
  nav.style.display = "flex";
  hero.style.display = "none";

  open.style.display = "none";
  close.style.display = "flex";
};

closeNav = () => {
  nav.style.display = "none";
  hero.style.display = "flex";

  open.style.display = "flex";
  close.style.display = "none";

  window.location.reload();
};
