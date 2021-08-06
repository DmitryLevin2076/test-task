

/** Кнопка на странице index.html **/


const stylesContainer = `
    display: none;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px 5px;
    width: 800px;
    height: fit-content;
    border: 2px solid grey;
    padding: 15px;`

const container = document.createElement("div")
container.style.cssText = stylesContainer
document.body.append(container)

document.querySelector(".button").addEventListener("click", () => {
  container.querySelectorAll("div").forEach((el) => el.remove())
  addedElement()
})


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createElements() {
  const a = getRandomInt(0, 255)
  const b = getRandomInt(0, 255)
  const c = getRandomInt(0, 255)

  const block = document.createElement("div")
  block.style.width = "20px"
  block.style.height = "20px"
  block.style.backgroundColor = `rgb(${a}, ${b}, ${c})`

  container.style.display = "flex"
  container.append(block)
}

function addedElement() {
  const count = getRandomInt(10, 100)
  for (let i = 0; i <= count; i++ ) {
    createElements()
  }
}

