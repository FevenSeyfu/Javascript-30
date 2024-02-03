const item =  document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

item.addEventListener('mousedown',(e)=>{
    isDown = true;
    item.classList.add('active');
    startX = e.pageX - item.offsetLeft;
    scrollLeft = item.scrollLeft
    // console.log(startX);
})
item.addEventListener('mouseleave',()=>{
    isDown = false;
    item.classList.remove('active');
})
item.addEventListener('mouseup',()=>{
    isDown = false
})
item.addEventListener('mousemove',(e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x =  e.pageX - item.offsetLeft;
    const walk = x-startX
    item.scrollLeft = scrollLeft - walk;
})

