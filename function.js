let container = document.querySelector('#container');
let canvas = makeCanvas(20);

container.appendChild(canvas)

let allCells = document.querySelectorAll('.cell');

allCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", 
        "background: black; border: white dashed 1px;")
    })
})

function createCell(canvas){
    let cell = document.createElement('div');
    cell.classList.add('cell');
    canvas.appendChild(cell);
}

function makeCanvas(sides){
    let canvas = document.createElement('div');
    canvas.classList.add('canvas');
    canvas.setAttribute('style', 'display: grid');
    canvas.style.gridTemplateColumns = `repeat(${sides}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${sides}, 1fr)`;

    for(let i = 0; i < sides*sides; i++){
        createCell(canvas);
    }

    return canvas
}