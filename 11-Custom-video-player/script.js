const body = document.body;
const toggleBtn = document.querySelector(".theme-toggle");
const video = document.querySelector(".viewer");
const volumeIcon = document.querySelector(".volume-icon");
const playIcon = document.querySelector(".play-pause-icon");
const volumeSlider = document.querySelector(".player__slider")
const iconBaseUrl = 'https://img.icons8.com/ios-filled/50/FFFFFF/'
let togglePlayer;

const toggleTheme = () => {
  body.classList.toggle("dark");
  toggleBtn.classList.toggle("theme-toggle--toggled");
  video.classList.toggle("dark");
};
const playPauseToggle = () => {
  togglePlayer === "pause--v1" ? (togglePlayer="play--v1",video.pause()):( togglePlayer="pause--v1", video.play() );
  playIcon.src = `${iconBaseUrl}${togglePlayer}.png`;
};
const volumeToggle = () => {
  volumeSlider.classList.toggle('hidden')
};
toggleBtn.addEventListener("click", toggleTheme);
playIcon.addEventListener("click", playPauseToggle);
window.addEventListener("keydown", (e)=>{
  if (e.key === " ") {
    playPauseToggle()
  }
});
volumeIcon.addEventListener("click", volumeToggle);
// volumeSlider.addEventListener('change',changeVolume);