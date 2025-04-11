function reduceHrefs(elems) {
  return [...elems].reduce((acc, elem) => {
    const href = elem.getAttribute('href');
    if (href && href.includes('#')) {
      const elemId = href.split('#')[1];
      acc[elemId] = elem;
    }
    return acc;
  }, {});
}

const refs = {
  sections: document.querySelectorAll('section'),
  links: [
    ...Object.entries(
      reduceHrefs(document.querySelectorAll('.mobile-menu-list a'))
    ),
    ...Object.entries(reduceHrefs(document.querySelectorAll('.header_menu a'))),
  ],
};

function onScroll() {
  let currentSectionId = null;
  let minDistance = Infinity;

  refs.sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs(rect.top);

    if (distance < minDistance && rect.top < window.innerHeight) {
      minDistance = distance;
      currentSectionId = section.id;
    }
  });

  if (currentSectionId) {
    refs.links.forEach(link => {
      link[1].classList.toggle('active', link[0] === currentSectionId);
    });
  }
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
