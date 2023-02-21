// export function scrollToElement(destination, position) {
//   document.querySelector('.scroll-logo')?.addEventListener('click', (event) => {
//     event.preventDefault();
//     destination?.scrollIntoView({ block: position });
//   });
// }
export function scrollToElement() {
  document.querySelector('.scroll-logo')?.addEventListener('click', (event) => {
    event.preventDefault();
    var innerHeight = window.innerHeight;
    window.scrollTo(0, innerHeight - 80);
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

function animateOnScroll(element, clss) {
  var scrollTop = document.documentElement.scrollTop;
  if (!element) return;
  scrollTop > 130
    ? element.classList.add(clss)
    : element.classList.remove(clss);
}

function scrollHandler() {
  let mainLogo = document.querySelector('.main-logo');
  let logoP = document.querySelector('.logo-p');
  animateOnScroll(logoP, 'fade');
  animateOnScroll(mainLogo, 'shrink');
}

window.addEventListener('scroll', scrollHandler);
