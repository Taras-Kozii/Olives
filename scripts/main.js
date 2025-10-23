'use strict';

import { initNavigation } from './menu.js';
import { initHeader } from './header.js';
import { initClose } from './close.js';
import { watcherAnim, watcherToggle } from './effects/animation.js';
import { showBefore } from './functions.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeader();
  initClose();
  watcherToggle('.scroll-anim', 0.25);
  watcherAnim('.show-before', 0.25, showBefore, true);
});
