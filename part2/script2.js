const berger = document.querySelector('.oneDivHeader');
console.log(berger);
const nav = document.querySelector('.nav');
const spanClick = document.querySelector('.spanClick');
const img2 = document.getElementById('img2');
berger.addEventListener('click', function () {
  nav.style.display = 'block';
  
})

spanClick.addEventListener('click', () => {
  nav.style.display = 'none';
  
})