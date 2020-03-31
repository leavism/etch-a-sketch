let container = document.querySelector("#container");
let randomBtn = document.querySelector(".random");
let blackBtn = document.querySelector(".black");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".new");
let graBtn = document.querySelector(".gradient");

let black = true;
let oldBlack;

start();

function start(sides) {
  if (sides) {
    var canvas = makeCanvas(sides);
  } else {
    var sides = 100;
    var canvas = makeCanvas(sides);
  }
  container.prepend(canvas);

  let allCells = document.querySelectorAll(".cell");

  allCells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
      if (black) {
        if (cell.style.background == "white") {
          cell.style.background = "black"
          cell.style.opacity = 1;
        }
      } else if (black === false) {
        if (
          cell.style.background == "white" &&
          cell.style.background != "black"
        ) {
          // cell.setAttribute("style", `background: ${randomColor()};`);
          cell.style.background= `${randomColor()}`
        }
      } else if (black === null) {
        if(cell.style.background == "black" || cell.style.background == "white"){
          cell.style.background = "black";
          cell.style.opacity = parseFloat(cell.style.opacity || 0) + 0.1;
        }

      }
    });
  });
}

resetBtn.addEventListener("click", () => {
  container.removeChild(container.firstElementChild);
  start(sides);
});

graBtn.addEventListener("click", () => {
  black = null;
});

newBtn.addEventListener("click", () => {
  let newSize = prompt("How many my dude?");
  newSize = parseInt(newSize);
  while (typeof newSize == NaN) {
    newSize = prompt("How many my dude?");
  }
  container.removeChild(container.firstElementChild);
  start(newSize);
});

randomBtn.addEventListener("click", () => {
  black = false;
});

blackBtn.addEventListener("click", () => {
  black = true;
});

function createCell(canvas, color) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  cell.style.background = `${color}`;
  canvas.appendChild(cell);
}

function makeCanvas(sides) {
  let canvas = document.createElement("div");
  let color = "white";
  canvas.classList.add("canvas");
  canvas.setAttribute("style", "display: grid");
  canvas.style.gridTemplateColumns = `repeat(${sides}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${sides}, 1fr)`;

  for (var y = 0; y < sides; y++) {
    for (var x = 0; x < sides; x++) {

      createCell(canvas, color);
    }
  }
  return canvas;
}

function randomColor() {
  let s = 255;
  let floor = Math.floor;
  return `rgba(${floor(Math.random() * s)},${floor(Math.random() * s)},${floor(
    Math.random() * s
  )},${floor(Math.random() * s)})`;
}
