'use strict';

export function initClose() {
  const close = document.querySelector('.close');
  const headerTop = document.querySelector('.header-top');
  const headerContent = document.querySelector('.header__content');

  close.addEventListener('click', () => {
    headerTop.style.display = "none";
    headerContent.style.paddingTop = '30px';
  })
}