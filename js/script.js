import frontTechnos from './data/front.technos.js';
import backTechnos from './data/back.technos.js';
import toolsTechnos from './data/tools.technos.js';

const wrapperElement = document.querySelector('.wrapper');
const frontElement = document.getElementById('front');
const backElement = document.getElementById('back');
const toolsElement = document.getElementById('tools');
const parallaxSections = document.querySelectorAll('.parallax');

const navLinks = document.getElementsByClassName('nav_links');
const arrayNavLinks = Array.from(navLinks);

const createCardElement = (data, parentElement) => {
  data.map((item) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');

    // img.src = item.image;
    img.setAttribute('data-src', item.image);
    img.classList.add('lazy');
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

const parallaxArray = {};
let i = 0;

Array.prototype.forEach.call(parallaxSections, function (e) {
  parallaxArray[e.id] = e.offsetTop - 500;
});
console.log(parallaxArray);

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

const io = new IntersectionObserver((entries) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      console.log(image);
      image.src = image.dataset.src;
      io.unobserve(image);
    }
  })
);

document.querySelectorAll('.lazy').forEach((element) => io.observe(element));
