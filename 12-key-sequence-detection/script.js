const keyPressed = [];
const secretCode = 'awesome'
window.addEventListener("keyup",(e)=>{
    console.log(e.key);
    keyPressed.push(e.key)
    keyPressed.splice(-secretCode.length-1,keyPressed.length-secretCode.length)
    if(keyPressed.join('').includes(secretCode)){
        console.log('Jackpot! You got the secret code!');
        cornify_add();
    }
    console.log(keyPressed)
})