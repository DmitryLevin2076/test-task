const stylesContainer = {
  width: "600px",
  height: "600px",
  backgroundColor: "#3f458a",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

const stylesBlock = {
  width: "400px",
  height: "400px",
  backgroundColor: "#acbaef"
}

const container = document.createElement("div")
const block = document.createElement("div")

function styleComponentByObject(el, styles) {
  for (let key in styles) {
    el.style[key] = styles[key]
  }
}

styleComponentByObject(container, stylesContainer)
styleComponentByObject(block, stylesBlock)

document.body.append(container)
container.prepend(block)