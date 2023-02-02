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

var header = document.querySelector('.logo-p');

function fadeOutOnScroll(element) {
  var scrollLogo = document.querySelector('.top-element');

  if (!element || !scrollLogo) {
    return;
  }

  var distanceToTop =
    window.pageYOffset + scrollLogo.getBoundingClientRect().top;
  var elementHeight = scrollLogo.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;

  var opacity = 1;

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function scrollHandler() {
  fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);
