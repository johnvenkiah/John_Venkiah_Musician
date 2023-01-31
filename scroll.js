export function scrollToElement(destination) {
  document.querySelector('.scroll-logo')?.addEventListener('click', (event) => {
    event.preventDefault();
    if (destination) {
      destination.scrollIntoView();
    }
  });
}

export function scrollToTop(element) {
  element?.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  });
}

window.onload = () => {
  document.querySelector('body').style.opacity = 1;
};
