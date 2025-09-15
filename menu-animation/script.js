document.addEventListener('DOMContentLoaded', () => {

const btn = document.getElementById('btn');
const menu = document.querySelector('.menu__nav');

btn.addEventListener('click', () => {
  if(menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
  } else {
    menu.classList.remove('is-close');
    menu.classList.add('is-open');
  }
});

menu.addEventListener('click', () => {
  if(menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    menu.classList.add('is-close');
  }
});
});