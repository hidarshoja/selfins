const berger = document.querySelector('.burger')
const nav = document.querySelector('.mobile-nav nav')
const spanClick = document.querySelector('.spanClick')
const img2 = document.getElementById('img2');
const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
berger.addEventListener('click', function () {
  nav.style.display = 'block';
  img2.style.display = 'none';
  para1.style.display = 'none';
  para2.style.display = 'none';
})

spanClick.addEventListener('click', () => {
  nav.style.display = 'none';
  img2.style.display ='block';
  para1.style.display = 'block';
  para2.style.display = 'block';
})

// let burgers = document.querySelectorAll('.burger')
// let nav = document.querySelector('.mobile-nav nav')

// burgers.forEach((e) =>
//   e.addEventListener('click', function () {
//     nav.style.display = nav.style.display === 'block' ? 'none' : 'block'
//   }),
// )

// if (nav.style.display === 'block') {
//   nav.style.display = 'none'
// } else {
//   nav.style.display = 'block'
// }
