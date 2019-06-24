// const myBlog = document.querySelector(".article__header")
// myBlog.textContent = "Welcome to Blake's blog"

// const allImport = document.querySelectorAll(".article__header")
// allImport[0].classList.add("important")
// allImport[1].classList.add("important")
// console.log("allImport", allImport)

// const dash = document.querySelector(".dashed")
// dash.classList.remove(".dashed")
// console.log("dash", dash)

// const gr = document.querySelector(".article__footer")
// gr.classList.add("goldenrod")
// console.log("gr", gr)




let artChange = document.querySelector(".article__header")

artChange.textContent= "Welcome to Blake's Blog"

let classChange = document.querySelectorAll(".article__header")
let removeDash = document.querySelector(".dashed")

classChange[0].classList.add("important")
classChange[1].classList.add("important")

console.log(classChange[0])
console.log(classChange[1])

removeDash.classList.remove(".dashed")

console.log('remove dash - ',removeDash)

let color = document.querySelector(".article__footer")

color.classList.add("goldenrod")




























