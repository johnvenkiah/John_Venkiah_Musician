import { navContent } from './nav.js';
import { scrollToElement, scrollToTop } from './scroll.js';
import { smLinks } from './sm-links.js';

navContent();
smLinks();
scrollToElement(document.querySelector('#scroll-listen'));
scrollToTop(document.querySelector('#to_top_listen'));
