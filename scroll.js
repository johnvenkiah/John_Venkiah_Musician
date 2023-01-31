export function scrollToElement(element, destination) {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    if (destination) {
      destination.scrollIntoView();
    }
  });
}

export function scrollToTop(element) {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  });
}
