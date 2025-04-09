const refs = {
  cookiesAccept: document.querySelector('.cookies-accept'),
  cookiesDecline: document.querySelector('.cookies-decline'),
  cookies: document.querySelector('.cookies'),
};

function acceptHandler(isAccepted) {
  refs.cookies.classList.add('closed');
  localStorage.setItem('isAccepted', JSON.stringify(isAccepted));
}

const isAccepted = localStorage.getItem('isAccepted');

if (isAccepted === null) {
  refs.cookies.classList.remove('closed');
  refs.cookiesAccept.addEventListener('click', () => acceptHandler(true));
  refs.cookiesDecline.addEventListener('click', () => acceptHandler(false));
}
