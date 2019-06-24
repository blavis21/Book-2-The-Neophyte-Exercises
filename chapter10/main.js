let foodHTML = document.getElementById("foodList")

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
        for (i = 0; i < parsedFoods.length; i++) {
            foodHTML.innerHTML += foodArr(parsedFoods[i])
        }

        // for ( i = 0; i < parsedFoods.length; i++) {
        //     parsedFoods["barcode"] = ""
        // }
    })

let foodArr = (printArr) => {
    return `
    <div class="fl">
        <h2>${printArr.name}</h2>
        <p>${printArr.category}</p>
        <p>${printArr.ethnicity}</p>
    </div>`
}


//Practice: Fetching Other Peoples Data

// fetch("https://world.openfoodfacts.org/api/v0/product/0011150479547.json")
//     .then(response => response.json())
//     .then(productInfo => {
        
//     })