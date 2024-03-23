const canvas = document.querySelector("#out");
const ctx = canvas.getContext("2d");
let position = 500;
let x = 100,
  y = 200,
  dx = 4,
  dy = 3,
  dt = 1000 / 60 /* 60 images par secondes  */,
  xMin = 0,
  yMin = 0,
  xMax = 700,
  yMax = 500,
  sensX = 1,
  sensY = 1;
let barre = document.querySelector(".barre");
function update() {
  ctx.beginPath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fill();
  x += sensX * dx;
  y += sensY * dy;
  if (x > xMax) sensX = -1;
  if (x < xMin) sensX = 1;
  if (y > yMax) sensY = -1;
  if (y < yMin) sensY = 1;
  setTimeout(update, dt);
}

function handleMove(evt) {
  const pos = "x : " + evt.clientX;
  position = evt.clientX;
  document.querySelector(".out1").innerHTML = pos;
  console.log(parseInt(barre.style.left));
  // if (parseInt(barre.style.left) >= 450) 
  barre.style.left = position + "px";
}
  document.body.addEventListener("keydown", (ev) => {
    if (ev.key == "ArrowRight") position += 30; 
    if (ev.key == "ArrowLeft") position -= 30; 
    barre.style.transition = "0s ease-in-out"; 
    barre.style.left = position + "px";
    console.log(position);
  });

update();
