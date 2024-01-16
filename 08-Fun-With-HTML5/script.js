const canvas = document.querySelector("#canvas");
const clearBtn = document.querySelector(".clear-btn");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let direction = true;
let hue = 0;
let x = 0;
let y = 0;
ctx.lineWidth = 30;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    x2 = e.offsetX;
    y2 = e.offsetY;
    draw(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});
canvas.addEventListener("mouseout", stopDrawing);
function draw(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if(ctx.lineWidth <=1 || ctx.lineWidth>=50){
    direction = !direction
  }
  if (direction) {
    ctx.lineWidth++
  }else{
    ctx.lineWidth--
  }
}

function stopDrawing() {
    isDrawing = false;
}

clearBtn.addEventListener('click',()=>ctx.clearRect(0,0, canvas.width, canvas.height))