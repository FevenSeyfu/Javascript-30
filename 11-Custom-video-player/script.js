const body = document.body;
const toggleBtn = document.querySelector(".theme-toggle");
const viewer = document.querySelector(".viewer");
const volumeIcon = document.querySelector(".volume-icon");
const playIcon = document.querySelector(".play-pause-icon");
const volumeSlider = document.querySelector(".player__slider")

const toggleTheme = () => {
  body.classList.toggle("dark");
  toggleBtn.classList.toggle("theme-toggle--toggled");
  viewer.classList.toggle("dark");
};
const playPauseToggle = () => {
  togglePlayer === "play--v1" ? togglePlayer="pause--v1" : togglePlayer="play--v1";
  playIcon.src = `${iconBaseUrl}${theme}${togglePlayer}.png`;
};
const volumeToggle = () => {
  volumeSlider.classList.toggle('hidden')
};
toggleBtn.addEventListener("click", toggleTheme);
playIcon.addEventListener("click", playPauseToggle);
volumeIcon.addEventListener("click", volumeToggle);
