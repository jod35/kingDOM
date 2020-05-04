const heading=document.querySelector('h1');

const press_me=document.querySelector('#press');

press_me.addEventListener('click',()=>{
    heading.classList.add('head');
});