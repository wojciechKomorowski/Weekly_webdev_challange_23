import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', function() {
  const navBar = document.querySelector('.root__navbar');
  const menu = navBar.querySelector('.navbar__menu');
  const menuItems = menu.querySelectorAll('.menu__item');
  const menuAnchors = menu.querySelectorAll('.menu__item a');

  for (let i = 0; i < menuItems.length; i++) {
    menuAnchors[i].addEventListener('click', function() {
      if (this.parentElement.className !== "menu__item menu__item--active") {
        menuItems.forEach(element => {element.className = "menu__item"});
        this.parentElement.className = "menu__item menu__item--active";
      }
      // Scroll to mechanism
      // Removing whitespaces with regexp
      let id = this.innerText.toLowerCase().replace(/\s+/g, '');
      let element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      }
    });
  }
  
});

