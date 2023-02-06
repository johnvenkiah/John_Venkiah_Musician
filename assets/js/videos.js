import { navContent } from './nav.js';
import { scrollToElement, scrollToTop } from './scroll.js';
import { smLinks } from './sm-links.js';

navContent();
smLinks();
scrollToElement(document.querySelector('#vid-1'));
scrollToTop(document.querySelector('#to_top_videos'));
