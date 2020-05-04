const input=document.querySelector('input');
const btn=document.getElementById('click_me');

const tasks=document.getElementById('tasks');


btn.addEventListener('click',()=>{
    const task= document.createElement('li');
    const del_btn =document.createElement('button');
    del_btn.innerHTML="Delete";
    task.innerHTML=input.value;
    task.appendChild(del_btn);
    tasks.appendChild(task);

    del_btn.addEventListener('click',()=>{
       task.style.display="none";
    });
})