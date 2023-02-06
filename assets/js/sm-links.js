export function smLinks() {
  const sanitizer2 = new Sanitizer();

  const smLinks = {
    youtube: {
      url: 'https://www.youtube.com/channel/UCe4ixizg5o-fAcdo9lOsd1w/videos',
      icon: 'fab fa-youtube',
      ariaLabel: "Check out John's videos on YouTube (opens new tab)",
    },
    facebook: {
      url: 'https://www.facebook.com/JohnVenkiahTrio',
      icon: 'fab fa-facebook-f',
      ariaLabel: 'Follow John Venkiah Trio on Facebook (opens new tab)',
    },
    spotify: {
      url: 'https://open.spotify.com/album/45nFMsq34mgAppXfaP9FJl?si=lkQt3N3OT02bhZMLtt__GQ',
      icon: 'fab fa-spotify',
      ariaLabel: "Listen to John's music on Spotify (opens new tab)",
    },
    instagram: {
      url: 'https://www.instagram.com/johnvenkiah/',
      icon: 'fab fa-instagram',
      ariaLabel: 'Follow John on Instagram (opens new tab)',
    },
  };

  for (let link in smLinks) {
    let smLiMarkup = `
  <li class="sm-icons">
    <a href="${smLinks[link].url}" target="_blank" rel="noopener" aria-label="${smLinks[link].ariaLabel}">
      <i class="${smLinks[link].icon}">
      </i>
    </a>
  </li>
  `;

    document
      .getElementById('sm-links')
      ?.insertAdjacentHTML('beforeend', smLiMarkup);
  }
}
