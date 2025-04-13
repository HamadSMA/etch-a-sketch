let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  let gridNumber = Number(prompt("Enter a number between 0 and 100"));

  if (gridNumber > 100 || gridNumber < 1) {
    msg = document.querySelector(".message");
    msg.textContent = "Grid number must be 100 or less and greater than 0";
  } else {
    generateGrid(gridNumber);
    changeColor();
  }
});

function generateGrid(gridNumber) {
  let grid = gridNumber * gridNumber;
  const container = document.querySelector(".container");
  //Creat a dynamic container that will display boxes in a grid
  boxSize = 20;
  totalWidth = gridNumber * boxSize;
  container.style.cssText = `width: ${totalWidth}px;`;

  //Create div boxes based on grid number
  let div;
  for (let i = 0; i < grid; i++) {
    div = document.createElement("div");
    div.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; border: 1px solid black;`;
    container.appendChild(div);
  }
}

// Change color of box on hover
function changeColor() {
  let divs = document.querySelectorAll(".container div");
  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "blue";
    });
  });
}
