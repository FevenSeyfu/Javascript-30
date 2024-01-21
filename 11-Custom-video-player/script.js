const body = document.body;
const toggleBtn = document.querySelector(".theme-toggle");
const video = document.querySelector(".viewer");
const volumeIcon = document.querySelector(".volume-icon");
const playIcon = document.querySelector(".play-pause-icon");
const volumeSlider = document.querySelector(".player__slider")
const iconBaseUrl = 'https://img.icons8.com/ios-filled/50/FFFFFF/'
const playRateBtns = document.querySelectorAll(".playrate");
let togglePlayer;
let toggleVolume;

// theme control
const toggleTheme = () => {
  body.classList.toggle("dark");
  toggleBtn.classList.toggle("theme-toggle--toggled");
  video.classList.toggle("dark");
};
toggleBtn.addEventListener("click", toggleTheme);

// pause and play controller
const playPauseToggle = () => {
  togglePlayer === "pause--v1" ? (togglePlayer="play--v1",video.pause()):( togglePlayer="pause--v1", video.play() );
  playIcon.src = `${iconBaseUrl}${togglePlayer}.png`;
};
playIcon.addEventListener("click", playPauseToggle);
window.addEventListener("keydown", (e)=>{
  if (e.key === " ") {
    playPauseToggle()
  }
});

// control video volume 
volumeIcon.addEventListener("mouseenter", ()=>{
  volumeSlider.classList.remove('hidden')
});

volumeIcon.addEventListener("mouseleave", ()=>{
  const hideVolume = () => {
    volumeSlider.classList.add('hidden')
  }
  setTimeout(hideVolume, 3000);
});
volumeIcon.addEventListener("click", ()=>{
  if(video.muted ===  true){
    video.muted = false;
    toggleVolume = "high-volume--v1" ;
    volumeSlider.value = 50;
  }else{
    video.muted = true; 
    toggleVolume = "no-audio--v1"
    volumeSlider.value = 0
  }
  volumeIcon.src = `${iconBaseUrl}${toggleVolume}.png`;
});
const changeVolume = () =>{
  video.volume = volumeSlider.value/100;
}
volumeSlider.addEventListener('change',changeVolume);

// control video play rate
playRateBtns.forEach(playRate => {
  playRate.addEventListener('click',(e)=>{
    video.currentTime += parseFloat(e.target.getAttribute('data-skip'))
  })
});

