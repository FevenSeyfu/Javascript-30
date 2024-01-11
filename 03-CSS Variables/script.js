const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');
const color = document.querySelector('#coloring');
const img =  document.querySelector('.img');

blur.addEventListener('input',(e)=>{
    img.style.filter = `blur(${e.target.value}px)`
});

spacing.addEventListener('input',(e)=>{
    img.style.borderWidth = `${e.target.value}px`;
});

color.addEventListener('input',(e)=>{
    img.style.borderColor = e.target.value;
})