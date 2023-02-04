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

function animateOnScroll(element, clss) {
  var scrollTop = document.documentElement.scrollTop;
  if (!element) return;
  scrollTop > 130
    ? element.classList.add(clss)
    : element.classList.remove(clss);
}

function scrollHandler() {
  animateOnScroll(logoP, 'fade');
  animateOnScroll(mainLogo, 'shrink');
}

window.addEventListener('scroll', scrollHandler);
