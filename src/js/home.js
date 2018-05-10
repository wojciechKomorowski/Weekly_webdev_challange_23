import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', function() {
  const navBar = document.querySelector('.root__navbar');
  const menu = navBar.querySelector('.navbar__menu');
  const menuItems = menu.querySelectorAll('.menu__item');
  const menuAnchors = menu.querySelectorAll('.menu__item a');
  
  const sections = document.querySelectorAll('body > *[id]');
  let sectionsPositions = [];

  
  // Mobile menu
  const menuHamburger = document.querySelector('.navbar__hamburger');
  let mobile = window.matchMedia("(max-width: 1115px)");

  function changeDisplay(mobile) {
    if (mobile.matches) {
      menu.style.display = 'none';
    } else  {
      menu.style.display = 'flex';
    }
  }
  
  changeDisplay(mobile)
  mobile.addListener(changeDisplay);

  menuHamburger.addEventListener('click', function(e) {
    if (menu.style.display === 'none') {
      menuHamburger.classList.add('navbar__hamburger-closed');
      menu.style.display = 'flex';
    } else {
      menuHamburger.classList.remove('navbar__hamburger-closed');
      menu.style.display = 'none';
    }
  });

  // Scroll to mechanism
  for (let i = 0; i < menuItems.length; i++) {
    sections.forEach(element => {
      sectionsPositions.push(element.offsetTop);
    });

    menuAnchors[i].addEventListener('click', function(e) {
      e.preventDefault();
      // Removing whitespaces with regexp
      let id = this.innerText.toLowerCase().replace(/\s+/g, '');
      let element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      }

      if (mobile.matches) {
        menuHamburger.classList.remove('navbar__hamburger-closed');
        menu.style.display = 'none';
      }
    });
  }

  // Actualize current section offset
  let scrollPosition = 0;

  window.addEventListener('resize', function() {
    sectionsPositions = [];
    sections.forEach(element => {
      sectionsPositions.push(element.offsetTop);
    });
  });
  
  // Highlight current section menu element
  window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    for (let i = 0; i < menuItems.length; i++) {
      let curentPos = sectionsPositions[i] - 30;
      
      if (scrollPosition > curentPos) {
        menuAnchors.forEach(element => {
          if (element.getAttribute('href') === '#' + sections[i].id) {
            menuItems.forEach(element => {element.className = "menu__item"});
            element.parentElement.className = "menu__item menu__item--active";
          }
        });
      }
    }
  }); 

  // Lightbox
  var myLightbox = GLightbox({
    'selector': 'glightbox',
  });
});

