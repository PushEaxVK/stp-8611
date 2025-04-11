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

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        refs.links.forEach(link => {
          link[1].classList.toggle('active', link[0] === id);
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

refs.sections.forEach(section => observer.observe(section));
