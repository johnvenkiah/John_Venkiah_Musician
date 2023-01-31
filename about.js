import { scrollToElement, scrollToTop } from './scroll.js';

scrollToElement(
  document.querySelector('.scroll-logo'),
  document.querySelector('#about-main-container')
);

scrollToTop(document.querySelector('#to_top_about'));
