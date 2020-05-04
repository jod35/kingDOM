const heading=document.getElementById('head');

const display=document.getElementById('display');


heading.addEventListener('click',(e)=>{
    const target=e.target;

    // get the bounding rectangle of an elemnt
    const rect =target.getBoundingClientRect();

    const x=e.clientX - rect.left;

    const y=e.clientY -rect.top;

    display.innerHTML=`the x coordinate is ${x} and the y coordinate is ${y}`;

})