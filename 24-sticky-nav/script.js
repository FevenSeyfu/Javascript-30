const nav = document.querySelector('#main');
const topofNav = nav.offsetTop;

const fixNav = () =>{
    if(window.scrollY >= topofNav){
        document.body.style.paddingTop = `${nav.offsetHeight}px`;
        document.body.classList.add('fixed-nav');
    } else{
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}
window.addEventListener('scroll',fixNav)