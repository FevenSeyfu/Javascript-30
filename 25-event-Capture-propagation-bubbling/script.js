const divs =  document.querySelectorAll('div')
const button = document.querySelector('button');

function logText(e){
    console.log(this.classList.value);
    e.stopPropagation(); //stop bubbling
}

// document.body.addEventListener('click',logText)

// bubbling when click on internal element event bubbles/ripple to the top of element
// divs.forEach(div => div.addEventListener('click',logText));

// capture up to down
divs.forEach(div => div.addEventListener('click',logText,{
    capture:false,
    once:true
}));
