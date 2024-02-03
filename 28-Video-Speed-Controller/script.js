const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handleSlider(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100);
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height + "%";
  bar.textContent = playbackRate.toFixed(2) + "×";
  video.playbackRate = playbackRate;

  // background color
  document.styleSheets[0].insertRule(
    `body::before { filter: grayscale(${100 - height}%); }`,
    document.styleSheets[0].cssRules.length
  );
}
speed.addEventListener("mousemove", handleSlider);
