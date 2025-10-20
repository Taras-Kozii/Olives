'use strict';

import { initNavigation } from './menu.js';
import { initHeader } from './header.js';
import { initClose } from './close.js';
// import { watcherAnim, watcherToggle, countAnimate } from './animation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeader();
  initClose();
  // watcherToggle('.hero .scroll-anim', 0.3);
  // watcherAnim('[data-counter]', 0.2, countAnimate, false);
});
