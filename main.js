/* eslint-disable linebreak-style */

/* mobile menu open close js */
const openBtn = document.querySelector('.open_btn');
const closeBtn = document.querySelector('.close_btn');
const mobMenu = document.querySelector('.mob-menu');
const mobItems = document.querySelectorAll('.mob-items');
openBtn.addEventListener('click', () => {
  mobMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  mobMenu.style.display = 'none';
});

mobItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobMenu.style.display = 'none';
  });
});