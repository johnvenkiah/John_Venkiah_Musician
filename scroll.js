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

var mainLogo = document.querySelector('.main-logo');
var logoP = document.querySelector('.logo-p');

function fadeOutOnScroll(element) {
  var topElement = document.querySelector('.top-element');

  if (!element || !topElement) {
    return;
  }

  var distanceToTop =
    window.pageYOffset + topElement.getBoundingClientRect().top;
  var elementHeight = topElement.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;

  var opacity = 1;

  if (scrollTop > distanceToTop) {
    opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

function shrinkOnScroll(element) {
  var scrollTop = document.documentElement.scrollTop;
  if (element) {
    if (scrollTop > 130) {
      element.classList.add('shrink');
    }
    if (scrollTop < 130) {
      element.classList.remove('shrink');
    }
  }
}

function scrollHandler() {
  shrinkOnScroll(mainLogo);
  fadeOutOnScroll(logoP);
}

window.addEventListener('scroll', scrollHandler);
