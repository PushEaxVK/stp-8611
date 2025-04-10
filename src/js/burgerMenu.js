const refs = {
  headerMenuButton: document.querySelector('.header-menu-button'),
  menu: document.querySelector('.mobile-menu'),
  close: document.querySelector('.menu-close-button'),
};

function handleMenu(isOpen) {
  if (isOpen) {
    refs.menu.classList.remove('closed');
  } else {
    refs.menu.classList.add('closed');
  }
}

refs.headerMenuButton.addEventListener('click', () => handleMenu(true));
refs.close.addEventListener('click', () => handleMenu(false));

refs.menu.addEventListener('click', event => {
  if (event.target.nodeName === 'A' || event.target.nodeName === 'IMG') {
    handleMenu(false);
  }
});
