const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    const gridSize = prompt('Enter the number of squares on one side', '16');
    if (gridSize && gridSize <= 100) {
        createGrid(gridSize);
    }
    else {
        alert("INVALID INPUT");
    }
});

function createGrid(gridSize) {
    container.innerHTML = '';
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const pix = document.createElement("div");
            pix.classList.add("pix");
            container.appendChild(pix);
        }
        // container.innerHTML += '<br>';
    }
}
// createGrid(16);