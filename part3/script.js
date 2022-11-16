const backMobaile = document.querySelector('.backMobaile');
const imgHeader1 = document.querySelector('.imgHeader1');
const burger = document.querySelector('.burger');
imgHeader1.addEventListener('click', () =>{
    backMobaile.style.display ='block';
})

burger.addEventListener('click', () =>{
    backMobaile.style.display = 'none';
})
