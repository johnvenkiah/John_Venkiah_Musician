import { navContent } from './nav.js';
import { scrollToElement, scrollToTop } from './scroll.js';
import { smLinks } from './sm-links.js';

navContent();
smLinks('sm-links');
scrollToElement(document.querySelector('#about-main-container'));
scrollToTop(document.querySelector('#to_top_about'));
