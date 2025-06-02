const body = document.querySelector("body");

// The container were the grid is going to be
const grid = document.createElement("div");
grid.className = "container";
body.appendChild(grid);

const columns = 16;
const rows = 16;

// Create a grid of 16x16 square divs
for (let i = 0 ; i < columns ; i++) {
    let rowsDiv = document.createElement("div");
    rowsDiv.className = "rowDiv";
    grid.appendChild(rowsDiv);
    for (let j = 0 ; j < rows ; j++) {
        let columnsDiv = document.createElement("div");
        columnsDiv.className = "gridDiv";
        rowsDiv.appendChild(columnsDiv);
        columnsDiv.addEventListener("mousemove", () => {columnsDiv.style.backgroundColor = "blue"});
    }
}