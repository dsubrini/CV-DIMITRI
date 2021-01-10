import frontTechnos from './data/front.technos.js';
import backTechnos from './data/back.technos.js';
import toolsTechnos from './data/tools.technos.js';

import { createCardElement } from './createElements.js';

const wrapperElement = document.querySelector('.wrapper');
const frontElement = document.getElementById('front');
const backElement = document.getElementById('back');
const toolsElement = document.getElementById('tools');
const parallaxSections = document.querySelectorAll('.parallax');
const navElement = document.getElementById('nav');
const navMobileElement = document.getElementById('mobile_nav');
const mobileNavButton = document.getElementById('toggle_nav');
const mobileNavLinks = document.querySelectorAll('.mobile_nav_links');

createCardElement(frontTechnos, frontElement);
createCardElement(backTechnos, backElement);
createCardElement(toolsTechnos, toolsElement);

const parallaxArray = {};
let i = 0;

Array.prototype.forEach.call(parallaxSections, function (e) {
  parallaxArray[e.id] = e.offsetTop - 500;
});

wrapperElement.onscroll = function () {
  let scrollPosition = wrapperElement.scrollTop;

  for (i in parallaxArray) {
    if (parallaxArray[i] <= scrollPosition) {
      document.querySelector('.current-link').setAttribute('class', ' ');
      document
        .querySelector('a[href*=' + i + ']')
        .setAttribute('class', 'current-link');
    }
  }
};

const navigationInit = () => {
  window.screen.width >= 1100 ? navMobileElement.remove() : navElement.remove();
  window.screen.width >= 1100 ? mobileNavButton.remove() : null;
};

navigationInit();

mobileNavButton.addEventListener('click', () => {
  navMobileElement.classList.add('display');
});

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMobileElement.classList.remove('display');
  });
});
