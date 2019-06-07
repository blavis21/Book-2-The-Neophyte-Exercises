let rand1 = document.getElementById("rand1")
let rand2 = document.getElementById("rand2")

let input = document.querySelector("#message")

input.addEventListener("keyup", liveType => {
    rand1.innerHTML = liveType.target.value;
    rand2.innerHTML = liveType.target.value
})