const hero = document.querySelector('.hero')
const text = hero.querySelector('h1');
let walk = 500;

const trackShadow = (e) =>{
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }
  
      const xWalk = Math.round((x / width * walk) - (walk / 2));
      const yWalk = Math.round((y / height * walk) - (walk / 2));
  
      text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(4,4,4,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(222,140,157,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(254,40,88),
        ${yWalk * -1}px ${xWalk}px 0 rgba(42,240,234,0.7)
      `;
}

hero.addEventListener('mousemove',trackShadow)