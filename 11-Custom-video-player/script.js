const body = document.body;
const toggleBtn = document.querySelector(".theme-toggle");
const video = document.querySelector(".viewer");
const volumeIcon = document.querySelector(".volume-icon");
const playIcon = document.querySelector(".play-pause-icon");
const volumeSlider = document.querySelector(".player__slider")
const iconBaseUrl = 'https://img.icons8.com/ios-filled/50/FFFFFF/'
let togglePlayer;
let toggleVolume;

const toggleTheme = () => {
  body.classList.toggle("dark");
  toggleBtn.classList.toggle("theme-toggle--toggled");
  video.classList.toggle("dark");
};
const playPauseToggle = () => {
  togglePlayer === "pause--v1" ? (togglePlayer="play--v1",video.pause()):( togglePlayer="pause--v1", video.play() );
  playIcon.src = `${iconBaseUrl}${togglePlayer}.png`;
};


// control video volume 
const changeVolume = () =>{
  video.volume = volumeSlider.value;
  console.log(video.volume);
}

toggleBtn.addEventListener("click", toggleTheme);
playIcon.addEventListener("click", playPauseToggle);
window.addEventListener("keydown", (e)=>{
  if (e.key === " ") {
    playPauseToggle()
  }
});
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
  video.muted ===  true ? (video.muted = false ,togglePlayer = "high-volume--v1" ) : (video.muted = true , togglePlayer = "no-audio--v1")
  volumeIcon.src = `${iconBaseUrl}${togglePlayer}.png`;
});

volumeSlider.addEventListener('change',changeVolume);