import { scrollToElement, scrollToTop } from './scroll.js';

scrollToElement(
  document.querySelector('.scroll-logo'),
  document.querySelector('#main-container-home')
);

scrollToTop(document.querySelector('.to-top'));
