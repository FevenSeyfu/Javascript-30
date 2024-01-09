const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add('play')
    audio.play()

    setTimeout(()=>{
        key.classList.remove('play');
    }, 500);
}
document.addEventListener('keydown',playSound)