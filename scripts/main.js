'use strict';

import { initNavigation } from './menu.js';
import { initHeader } from './header.js';
import { initClose } from './close.js';
import { watcherToggle } from './effects/animation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeader();
  initClose();
  watcherToggle('.scroll-anim', 0.1);
  // watcherAnim('[data-counter]', 0.2, countAnimate, false);
});
