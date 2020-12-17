const gridContainer = document.querySelector('#grid-container');
const gridSize = document.querySelector('#gridSize');
let gridCount = 16;
let penColor = "black";
const cell = document.getElementsByClassName("cell");
const currentColor = document.querySelector("#gridSize");
const erase = document.querySelector("#erase");

//create grid
function createGrid(gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('cell');
        gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        gridContainer.insertAdjacentElement('beforeend', gridItem);
    }

//draw on grid
for (i = 0; i < gridArea; i++) {
    cell[i].addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = penColor;
        cell[i].style.backgroundColor = "white"
        
    })
    currentColor.style.backgroundColor = "white";
}
}
createGrid(gridCount);

//erase grid drawing
erase.addEventListener("click", function () {
    for(i = 0; i < (gridArea); i++) {
        cell[i].style.backgroundColor = "white";
    }
    penColor = "black";
    currentColor.style.backgroundColor = "black";
}, false)

//change grid resolution
    gridSize.addEventListener("mouseup", function () {
        gridCount = this.value;
        createGrid(gridCount);
        for (i = 0; i < (gridCount * gridCount); i++) {
            cell[i].style.backgroundColor = "white";
        }
        penColor = "black"
    }, false)
