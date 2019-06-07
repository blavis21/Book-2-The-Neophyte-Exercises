//Practice: These are a few of my favorite things

let saveBtn = document.getElementById("saveBtn")

let productEntry = document.getElementById("productInfo")

saveBtn.addEventListener("click", event => {
    let product = document.getElementById("product").value
    let whereToBuy = document.getElementById("wtb").value

    let productPrint = `
    <div>
        <p>Product: ${product}</p>
        <p>Where to buy: ${whereToBuy}</p>
    </div>`

    productEntry.innerHTML += productPrint
})