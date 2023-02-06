import { navContent } from './nav.js';
import { smLinks } from './sm-links.js';
import { scrollToElement, scrollToTop } from './scroll.js';

navContent();
smLinks();
scrollToElement(document.querySelector('#main-container-home'));
scrollToTop(document.querySelector('.to-top'));
