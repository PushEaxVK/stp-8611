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

function reduseId(elems) {
  return [...elems].reduce((acc, elem) => {
    const elemId = elem.getAttribute('id');
    if (elemId) acc[elemId] = elem;
    return acc;
  }, {});
}

const refs = {
  // mobileLinks: reduceHrefs(document.querySelectorAll('.mobile-menu-list a')),
  // headerLinks: reduceHrefs(document.querySelectorAll('.header_menu a')),
  // sections: reduseId(document.querySelectorAll('section')),
  // mobLinks: document.querySelectorAll('.mobile-menu-list a'),
  // headLinks: document.querySelectorAll('.header_menu a'),
  sections: document.querySelectorAll('section'),
  links: [
    ...Object.entries(
      reduceHrefs(document.querySelectorAll('.mobile-menu-list a'))
    ),
    ...Object.entries(reduceHrefs(document.querySelectorAll('.header_menu a'))),
    // ...document.querySelectorAll('.mobile-menu-list a'),
    // ...document.querySelectorAll('.header_menu a'),
  ],
};

console.log(refs.links);

// console.log(refs.mobileLinks);
// console.log(refs.headerLinks);
// console.log(refs.sections);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        refs.links.forEach(link => {
          link[1].classList.toggle('active', link[0] === id);
          // console.log(id, link[0]);
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

refs.sections.forEach(section => observer.observe(section));
