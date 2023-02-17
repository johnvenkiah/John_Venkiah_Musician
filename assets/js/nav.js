import { smLinks } from './sm-links.js';

export function navContent() {
  let navMarkup = `
    <a href="index.html">
      <h1 class="main-logo">
          John Venkiah
      </h1>
    </a>
    <p class="logo-p">Pianist, singer, songwriter and developer</p>
    <nav id="menu-bar">
      <ul class="nav-menu">
      </ul>
      <button class="hamburger" aria-label="Menu-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>
    <div id="fade-bar">
    </div>
  `;

  document
    .getElementById('header')
    ?.insertAdjacentHTML('afterbegin', navMarkup);

  let links = {
    Contact: 'contact.html',
    About: 'about.html',
    Videos: 'videos.html',
    Listen: 'listen.html',
    Home: 'index.html',
  };

  for (let link in links) {
    let navItem = `
    <li class="nav-item">
      <a href="${links[link]}" class="nav-link">
          ${link}
      </a>
    </li>
    `;

    document
      .getElementById('menu-bar')
      .firstElementChild?.insertAdjacentHTML('beforeend', navItem);
  }

  let mobileUL = `
    <li class="nav-item" id="li-mobile">
      <ul id="sm-mobile-links">
      </ul>
    </li>
  `;

  document
    .getElementById('menu-bar')
    .firstElementChild?.insertAdjacentHTML('afterbegin', mobileUL);
  smLinks('sm-mobile-links');

  let liItems = document.querySelectorAll('#menu-bar li');

  liItems?.forEach((li) => {
    let aElement = li.firstElementChild;
    !li.textContent.includes('Contact') && li.classList.add('border-right');
    location.href.includes(aElement.getAttribute('href')) &&
      aElement.classList.add('link_active');
  });

  let hamburger = document.querySelector('.hamburger');
  let navMenu = document.querySelector('.nav-menu');

  hamburger?.addEventListener('click', () => {
    openMenu();
  });

  let navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  window.addEventListener('click', (event) => {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
      closeMenu();
    }
  });

  function openMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }
}
