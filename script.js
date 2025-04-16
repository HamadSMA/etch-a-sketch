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
  let boxSize = container.clientWidth / gridNumber;
  for (let i = 0; i < grid; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    container.appendChild(box);
  }
}

// Change color of box on hover
function changeColor() {
  let divs = document.querySelectorAll(".container div");

  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      let color = window.getComputedStyle(div).backgroundColor;
      if (color === "rgba(0, 0, 0, 0)") {
        div.style.backgroundColor = getNewColor();
      } else if (color !== "rgba(0, 0, 0, 0)") {
        opacity = window.getComputedStyle(div).opacity;
        if (opacity < 1) {
          div.style.opacity = Number(div.style.opacity) + 0.1;
        }
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
