import { navContent } from './nav.js';
import { scrollToElement, scrollToTop } from './scroll.js';
import { smLinks } from './sm-links.js';

navContent();
smLinks('sm-links');
scrollToElement();
scrollToTop(document.querySelector('#to_top_about'));
