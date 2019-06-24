// #1) Use dot notation to access the value of the key "meaning_of_life" in this object

// let hitchhikers_guide = {
//   characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//   catchphrase: "Don't Panic",
//   random_facts: {
//     copies_sold: 14000000,
//     formats: ["radio", "TV", "film", "graphic novel"],
//     ultimate_answer: {
//       meaning_of_life: 42
//     }
//   }
// };

// let meaning = hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;

// Now access it using a variable called "meaning": `let meaning = "meaning_of_life"`

// console.log(meaning);

// 2) ## An object's properties can be accessed by dot notation or bracket notation

// let employee = {
//   name: "Jeff Winger",
//   age: 37,
//   department: "legal",
//   hire_date: "09/22/2010"
// };

// console.log(`Our company's lawyer is ${employee.name}`);
// console.log(`Jeff was hired on ${employee.hire_date}`);
// employee.vacation_days = 20;
// employee[vacation_days] = 20;

// 1. Using the object above, console log "Our company's lawyer is Jeff Winger" using dot notation to access 'name'

// 2. Console log "Jeff was hired on 09/22/2010" using bracket notation.

// 3. Add a new key, `vacation_days`, and its value, `20`, to `employee`. Use either dot or bracket notation. Does it matter which one you use? Try both to find out.

// let eom = "employee_of_the_month";
// employee[eom] = false;
// console.log(employee);

// 4. Use the variable above to add a new property to `employee`. Set its value to `false`. Should you use dot or bracket notation?
// ===

// #3) ## Objects' keys can contain values of any type, even functions.

// let painter = {
//   tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
//   uniform: "white overalls",
//   cost_per_hour: 25.0,
//   insured: true,
//   work: function (action) {
//     console.log(`The painter ${action} the living room with ${painter.tools[3]}.`)
//   }
// };

// painter.work("sanded")

// 1. Add an action that the painter can perform.
// 2. Have her take that action by execucting the method you created.

// BONUS:
// Add a method that allows us to add new tools for the painter.


// Practice array loop

// let family = [{
//     name: "Fred Jones",
//     age: 49,
//     title: "parent"
//   },
//   {
//     name: "Pat Jones",
//     age: 50,
//     title: "parent"
//   },
//   {
//     name: "Bubba Jones",
//     age: 20,
//     title: "adult child"
//   },
//   {
//     name: "Kelly Jones",
//     age: 12,
//     title: "dependent child"
//   },
//   {
//     name: "Bartleby",
//     age: 3,
//     title: "pet"
//   }
// ]

// family.forEach( function (person) {
//   document.querySelector("#family").innerHTML += `<h3>${person.name}</h3>`
// })


// Practice: Represent your pet

// let pet = {
//     name: "Marley",
//     species: "Pitbull",
//     nicknames: ["Boo-Boo Bear", "Buddy"],
//     age: 9
// }


// Practice: Fast Food Ordering

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
}

const chickenComboMeal = {
    sandwichType: "Grilled Cajun Chicken",
    fries: true,
    drinkSize: "Medium"
}

const burgerMealCombo ={
    sandwichType: "Hamburger",
    fries: false,
    drinkSize: "Large"
}

// Place an order
restaurant.placeOrder(burgerMealCombo)
console.table(restaurant)