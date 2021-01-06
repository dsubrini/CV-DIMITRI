import frontTechnos from './data/front.technos.js';
import backTechnos from './data/back.technos.js';
import toolsTechnos from './data/tools.technos.js';

const frontElement = document.getElementById('front');
const backElement = document.getElementById('back');
const toolsElement = document.getElementById('tools');

const navLinks = document.getElementsByClassName('nav_links');
const arrayNavLinks = Array.from(navLinks);

arrayNavLinks.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    arrayNavLinks.map((item) => item.classList.remove('current-link'));
    navItem.classList.toggle('current-link');
  });
});

const createCardElement = (data, parentElement) => {
  data.map((item) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');

    img.src = item.image;
    p.innerHTML = item.title;
    div.classList.add('card');
    div.appendChild(img);
    div.appendChild(p);
    parentElement.appendChild(div);
  });
};

createCardElement(frontTechnos, frontElement);
createCardElement(backTechnos, backElement);
createCardElement(toolsTechnos, toolsElement);
