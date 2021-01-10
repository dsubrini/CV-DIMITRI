export const createCardElement = (data, parentElement) => {
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
