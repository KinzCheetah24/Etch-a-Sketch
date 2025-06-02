const body = document.querySelector("body");

const btn = document.querySelector("button");

// The container were the grid is going to be
const grid = document.createElement("div");
grid.className = "container";
body.appendChild(grid);

let numberSquaresPerSide = 16;

createGrid(numberSquaresPerSide);

btn.addEventListener("click", () => {
    do {
        numberSquaresPerSide = window.prompt("Enter a number (1 - 100)");
    } while (numberSquaresPerSide > 100);

    console.log(grid.childElementCount);

    for (let i = 0, numberOfChilds = grid.childElementCount ; i < numberOfChilds ; i++) {
        grid.lastChild.remove();
    }

    createGrid(numberSquaresPerSide);
});

function createGrid(squaresPerSide) {
    for (let i = 0 ; i < squaresPerSide ; i++) {
        let rowsDiv = document.createElement("div");
        rowsDiv.className = "rowDiv";
        for (let j = 0 ; j < squaresPerSide ; j++) {
            let columnsDiv = document.createElement("div");
            columnsDiv.className = "gridDiv";
            rowsDiv.appendChild(columnsDiv);
            columnsDiv.addEventListener("mousemove", () => {columnsDiv.style.backgroundColor = "blue"});
        }
        grid.appendChild(rowsDiv);
    }
}