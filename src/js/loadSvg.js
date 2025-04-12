import spriteUrl from '../img/sprite.svg?url';

const refs = {
  button: document.querySelector('.header-menu-button'),
  closeButton: document.querySelector('.menu-close-button'),
};

fetch(spriteUrl)
  .then(res => res.text())
  .then(svgText => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, 'image/svg+xml');
    const symbol = doc.getElementById('icon-burger');
    const symoblX = doc.getElementById('icon-icon-x');
    const gradient = doc.querySelector('linearGradient');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '48');
    svg.setAttribute('height', '48');
    svg.setAttribute('viewBox', symbol.getAttribute('viewBox'));
    svg.innerHTML = gradient.outerHTML + symbol.innerHTML;

    refs.button.appendChild(svg);

    const svgX = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgX.setAttribute('width', '48');
    svgX.setAttribute('height', '48');
    svgX.setAttribute('viewBox', symbol.getAttribute('viewBox'));
    svgX.innerHTML = gradient.outerHTML + symoblX.innerHTML;

    refs.closeButton.appendChild(svgX);
  });
