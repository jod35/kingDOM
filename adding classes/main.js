const heading=document.querySelector('h1');

const red=document.getElementById('red');
const blue=document.getElementById('blue');
const clear=document.getElementById('clear');

red.addEventListener('click',()=>{
    heading.classList.add('red');
});


blue.addEventListener('click',()=>{
   
   heading.classList.add('blue')
});

clear.addEventListener('click',()=>{
    heading.classList.remove('red','blue');
});
