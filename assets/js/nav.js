export function navContent() {
  let navMarkup = `
  <a href="index.html">
    <h1 class="main-logo">
        John Venkiah
    </h1>
  </a>
  <p class="logo-p">Pianist, singer, songwriter and developer</p>
  <nav id="menu-bar">
    <ul>
    </ul>
  </nav>
  <div id="fade-bar">
  </div>
  `;

  const sanitizer1 = new Sanitizer();

  document
    .getElementById('header')
    ?.setHTML(navMarkup, { sanitizer: sanitizer1 });

  let links = {
    Contact: 'contact.html',
    About: 'about.html',
    Videos: 'videos.html',
    Listen: 'listen.html',
    Home: 'index.html',
  };

  for (let link in links) {
    let navItem = `
    <li>
      <a href="${links[link]}">
          ${link}
      </a>
    </li>
    `;

    document
      .getElementById('menu-bar')
      .firstElementChild?.insertAdjacentHTML('beforeend', navItem);
  }

  let liItems = document.querySelectorAll('#menu-bar li');
  liItems?.forEach((li) => {
    if (!li.textContent.includes('Contact')) {
      li.classList.add('border-right');
    }
    let aElement = li.firstElementChild;
    if (location.href.includes(aElement.getAttribute('href'))) {
      aElement.classList.add('link_active');
    }
  });
}
