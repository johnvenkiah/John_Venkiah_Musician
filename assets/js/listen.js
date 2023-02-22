import { navContent } from './nav.js';
import { scrollToElement, scrollToTop } from './scroll.js';
import { smLinks } from './sm-links.js';

navContent();
smLinks();
scrollToElement();
scrollToTop(document.querySelector('#to_top_listen'));

function musicList() {
  const iframeData = {
    'Playlist - Various Artists':
      'https://open.spotify.com/embed/playlist/5iwI5nQRl8o4s7lYHHERYp',
    'John Venkiah Trio - On to Something Good':
      'https://open.spotify.com/embed/album/45nFMsq34mgAppXfaP9FJl',
    'John Venkiah Trio - Elevation':
      'https://open.spotify.com/embed/album/1FzXgdz4dnUV7QGpZAdYk3',
  };

  const albumLinkData = {
    jvt3: {
      href: 'https://open.spotify.com/album/45nFMsq34mgAppXfaP9FJl?si=0ow9UCgeSrO9bGrIWbdVHA',
      img: 'jvt3-small.jpeg',
      title: 'John Venkiah Trio - On to Something Good',
    },
    tingsek: {
      href: 'https://open.spotify.com/album/6Voev9NsTxoyxAkex84raK?si=RXuLrCqzTSSzpfOxc0ATTw',
      img: 'tingsek-ep.jpg',
      title: 'Tingsek - Live at Ljupet: Sessions 2016',
    },
    shirin: {
      href: 'https://open.spotify.com/track/6D05OZZgKjaCjow0d4p7jP?si=dc45f0b8cd5c4d71',
      img: 'shirin-22.jpeg',
      title: 'Shirin - 22',
    },
    faela: {
      href: 'https://open.spotify.com/album/284kSBf2m7IuUFRWIruyIe?si=6sNOi8UoQK-mdTvx4DRrtQ',
      img: 'faela-porelmundo.png',
      title: 'Faela - Por El Mundo',
    },
    saliBambra: {
      href: 'https://www.facebook.com/SaliBambra/videos/1684624961590184',
      img: 'salib-santsomlever.png',
      title: 'SaliBambra - Sånt som händer när vi lever',
    },
    hJosefsson: {
      href: 'https://open.spotify.com/album/6PCBrbtSrAVBr3x5Z6tKqn?si=o6s0omRqT_ekGAfWTbx9lg',
      img: 'beauty-h-josefsson.jpg',
      title: 'Helena Josefsson - Beauty Love Anything',
    },
    poNilsson: {
      href: 'https://open.spotify.com/album/1pqdIbffx5n8GnCzlRSpra?si=ksRTBezZQEO4yyGE-gbYNQ',
      img: 'po-nilsson-i-wish-i.jpeg',
      title: 'Per-Oscar Nilsson Group - I Wish I',
    },
  };

  for (let key in iframeData) {
    let spotifyPlaylist = `
      <div class="listen-album-wrapper">
      <p>${key}</p>
        <iframe src="${iframeData[key]}" allow="encrypted-media">
        </iframe>
      </div>
    `;
    document
      .querySelector('.music-list')
      .insertAdjacentHTML('afterbegin', spotifyPlaylist);
  }

  let spotifyIconHeadingMarkup = `
    <div class="spotify-heading-listen">
      <i class="fab fa-spotify"></i>
      <p>Links to music on Spotify</p>
    </div>
  `;

  document
    .querySelector('.music-list')
    .insertAdjacentHTML('afterbegin', spotifyIconHeadingMarkup);

  for (let album in albumLinkData) {
    let albumContainer = `
      <div class="listen-album-wrapper">
        <p>${albumLinkData[album].title}</p>
        <a href="${albumLinkData[album].href}" target="_blank"
          rel="noopener" title="${albumLinkData[album].title}">
          <img class="grid-cover" src="assets/images/${albumLinkData[album].img}" alt="${albumLinkData[album].title}">
        </a>
      </div>
    `;
    document
      .querySelector('.music-list')
      .insertAdjacentHTML('afterbegin', albumContainer);
  }
}

musicList();
