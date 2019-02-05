let container = document.querySelector('#container');
let colorBtn = document.querySelector('.color');
let resetBtn = document.querySelector('.reset');
let newBtn = document.querySelector('.new');
let graChk = document.querySelector('.gradient');

let black = true;

start();

function start(sides){
    if(sides) {
        var canvas = makeCanvas(sides);
        
    } else {
        var sides = 100;
        var canvas = makeCanvas(sides);
    }
    container.prepend(canvas)

    let allCells = document.querySelectorAll('.cell');

    allCells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            if(black){
                if (cell.style.background == "white" || cell.style.background == "rgb(209, 209, 209)")
                cell.setAttribute("style", 
                "background: black;")
            } else {
                if ((cell.style.background == "white" || cell.style.background == "rgb(209, 209, 209)")&& cell.style.background != "black"){
                    cell.setAttribute("style", 
                    `background: ${randomColor()};`)
                }
            }
        })
    })

    resetBtn.addEventListener("click", () => {
        container.removeChild(container.firstElementChild);
        start(sides);
    })
}

newBtn.addEventListener('click', () =>{
    let newSize = prompt("How many my dude?")
    newSize = parseInt(newSize);
    while(typeof(newSize) == NaN) {
        newSize = prompt("How many my dude?")
    }
    container.removeChild(container.firstElementChild);
    start(newSize)
})

colorBtn.addEventListener("click", () => {
    if(colorBtn.textContent == "Random"){
        colorBtn.textContent = "Black";
        black = false;
    } else {
        colorBtn.textContent = "Random";
        black = true;
    }
})

function createCell(canvas, color){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.background = `${color}`;
    canvas.appendChild(cell);
}

function makeCanvas(sides){
    let canvas = document.createElement('div');
    let color = "white"
    canvas.classList.add('canvas');
    canvas.setAttribute('style', 'display: grid');
    canvas.style.gridTemplateColumns = `repeat(${sides}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${sides}, 1fr)`;

    for(var y = 0; y < sides; y++){
        for(var x = 0; x < sides; x++){
            if((x+y) % 2 == 0) {
                color = "white"
            } else color = "rgb(209, 209, 209)";
            createCell(canvas, color);
        }
    }
    return canvas
}

function randomColor() {
    let s = 255;
    let floor = Math.floor;
    return `rgba(${floor(Math.random() * s)},${floor(Math.random() * s)},${floor(Math.random() * s)},${floor(Math.random() * s)})`;
}
