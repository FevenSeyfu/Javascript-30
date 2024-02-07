const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
 const flashScore = document.querySelector('.scoreboard')

let lastHole;
let timeUp = false
let score =0

function randomTime(min,max){
    return Math.random()*(max-min)+min;
}

function randomHole(holes){
    const idx = Math.floor(Math.random()*holes.length);
    const hole = holes[idx];
    if(hole === lastHole){
        return randomHole(holes);
    }
   lastHole = hole;
   return hole
}

function peep(){
    const time = randomTime(500,1000);
    const hole = randomHole(holes);

    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp) peep();
    },time)
}

function startGame(){
    scoreBoard.textContent = 0;
    timeUp = false;
    peep();
    setTimeout(()=>{
        timeUp = true;
        endGame()
    },10000)
    
}

function bank(e){
    if(!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}
moles.forEach(mole=>mole.addEventListener('click',bank))

function endGame(){
    flashScore.classList.remove('hidden')
    if(score>1){
        flashScore.innerHTML = `Whack-tastic! You Scored ${score}! &#11088;`
    }else{
        flashScore.innerHTML = "Keep swinging! You'll catch those moles next time! " + '&#128530;'
    }
    setTimeout(() => {
        flashScore.classList.add('hidden');
        score = 0;
    }, 5000);
}