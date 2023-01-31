import { scrollToElement, scrollToTop } from './scroll.js';

scrollToElement(
  document.querySelector('.scroll-logo'),
  document.querySelector('#scroll-listen')
);

scrollToTop(document.querySelector('#to_top_listen'));
