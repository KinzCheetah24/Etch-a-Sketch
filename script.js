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
            columnsDiv.addEventListener("mousemove", () => {
                columnsDiv.style.backgroundColor = getRandomColor();
                
                let currentOpacity = parseFloat(columnsDiv.style.opacity) || 0;
                console.log(currentOpacity);
                if (columnsDiv.style.opacity < 1) {
                    columnsDiv.style.opacity = currentOpacity + 0.1;
                }
            });
        }
        grid.appendChild(rowsDiv);
    }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);     
  const g = Math.floor(Math.random() * 256);    
  const b = Math.floor(Math.random() * 256);
  
  return `rgb(${r}, ${g}, ${b})`;
}