let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  let gridNumber = Number(prompt("Enter a number between 0 and 100"));

  if (gridNumber > 100 || gridNumber < 1) {
    msg = document.querySelector(".message");
    msg.textContent = "Must be a number between 100 or less and greater than 0";
  } else {
    removeBoxes();
    generateGrid(gridNumber);
    changeColor();
  }
});

function generateGrid(gridNumber) {
  let grid = gridNumber * gridNumber;
  const container = document.querySelector(".container");
  //Creat a dynamic container that will display boxes in a grid
  boxSize = 15;
  totalWidth = gridNumber * boxSize;
  container.style.cssText = `width: ${totalWidth}px; border: 10px double black;`;

  //Create div boxes based on grid number
  let div;
  for (let i = 0; i < grid; i++) {
    div = document.createElement("div");
    div.style.cssText = `width: ${boxSize}px; height: ${boxSize}px;`;
    div.style.opacity = Math.random();
    container.appendChild(div);
  }
}

// Change color of box on hover
function changeColor() {
  let divs = document.querySelectorAll(".container div");
  let isMouseDown = false;

  divs.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      let color = window.getComputedStyle(div).backgroundColor;
      if (color === "rgba(0, 0, 0, 0)") {
        div.style.backgroundColor = getNewColor();
      } else if (color !== "rgba(0, 0, 0, 0)") {
        opacity = window.getComputedStyle(div).opacity;
        console.log(opacity);
        div.style.opacity =
          Number(div.style.opacity) < 1
            ? Number(div.style.opacity) + 0.1
            : div.style.pacity;
      }
    });
  });
}

function removeBoxes() {
  let divs = document.querySelectorAll(".container div");
  divs.forEach((div) => {
    div.remove();
  });
}

function getNewColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = `rgba(${r}, ${g}, ${b}`;

  return color;
}
