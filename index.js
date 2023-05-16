const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const colourContainerEl = document.createElement("div");
  colourContainerEl.classList.add("colour-container");
  containerEl.appendChild(colourContainerEl);
}

const colourContainerEls = document.querySelectorAll(".colour-container");


//function to generate 30 random colours
generateColours();

function generateColours() {
  colourContainerEls.forEach((colourContainerEl) => {
    const newColourCode = randomColour();
    colourContainerEl.style.backgroundColor = "#" + newColourCode;

    colourContainerEl.innerText = "#" + newColourCode;

  })
}

//function to create a random hex value
function randomColour() {
  const chars = "0123456789abcdef";
  const colourCodeLen = 6;
  let colourCode = "";

  for (let i = 0; i < colourCodeLen; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);

    colourCode += chars.substring(randomNum, randomNum + 1);

  }
  return colourCode;
}

