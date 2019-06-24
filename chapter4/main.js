// Practice: Chicken Monkey

function chickenMonkey(currentNumber, limit) {
  for (; currentNumber <= limit; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
      console.log("ChickenMonkey");
    } else if (currentNumber % 7 === 0) {
      console.log("Monkey");
    } else if (currentNumber % 5 === 0) {
      console.log("Chicken");
    } else {
      console.log(currentNumber);
    }
  }
}

// chickenMonkey(5, 42);


// Practice: Take a Number - Battle of the Bands

// let bandNumber = 0

// let takeNumber = function(band) {
//     bandNumber++
//     return `${bandNumber}. ${band}`
// }

// let scum = takeNumber("Galactic Scum")
// console.log(scum)

// let under = takeNumber("Underdogs")
// console.log(under)


// Practice: Cookout

// const hamburger = {
// 	name: 'Hamburger',
// 	type: 'beef',
// 	cooked: false,
// }
// const zucchini = {
// 	name: 'Zucchini',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const chickenBreast = {
// 	name: 'Chicken Breast',
// 	type: 'chicken',
// 	cooked: false,
// }
// const corn = {
// 	name: 'Corn',
// 	type: 'vegetable',
// 	cooked: false,
// }
// const steak = {
// 	name: 'Steak',
// 	type: 'beef',
// 	cooked: false,
// }

// const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// const cookedFood = [];

// function grill (currentObject) {
//     currentObject.cooked = true;
//     cookedFood.push(currentObject);
// }

// for (i = 0; i < foods.length; i++) {
//     grill(foods[i]);
// };

// console.log(cookedFood)

// Practice: Stacking Words

// let sentence = [
//   "The",
//   "walrus",
//   "danced",
//   "through",
//   "the",
//   "trees",
//   "in",
//   "the",
//   "light",
//   "of",
//   "the",
//   "moon"
// ];

// function addExcitement(theWordArray) {
//   let buildMeUp = "";

//   for (let i = 0; i < theWordArray.length; i++) {
//       buildMeUp = buildMeUp + " " + sentence[i];
//       console.log(buildMeUp)
//     }
// }

// addExcitement(sentence);

// Practice: Some words are more exciting than others

// let sentence = [
//   "The",
//   "walrus",
//   "danced",
//   "through",
//   "the",
//   "trees",
//   "in",
//   "the",
//   "light",
//   "of",
//   "the",
//   "moon"
// ];

// function addExcitement(theWordArray) {
//   let buildMeUp = "";

//   for (let i = 3; i < theWordArray.length; i++) {
//     buildMeUp = buildMeUp + " " + sentence[i] + "!";
//     if (i % 3 === 0) {
//       console.log(buildMeUp);
//     }
//   }
// }

// addExcitement(sentence);


// In Class Exercises
// 1

// let employees = [
//     {
//       name: "Bob",
//       department: "sales",
//       title: "sales manager"
//     },
//     {
//       name: "Tina",
//       department: "finance",
//       title: "director of finance"
//     },
//     {
//       name: "Randy",
//       department: "IT",
//       title: "hardware guy"
//     },
//     {
//       name: "Glenda",
//       department: "C-suite",
//       title: "CEO"
//     }
//   ];

// employee inside of function is a variable and can be anything you want to name it
// employees.forEach( function(employee) {
//     console.log(`${employee.name}'s job title is ${employee.title}`)
// });

// for ( i = 0; i < employees.length; i++) {
//     console.log(`${employees[i].name}'s job title is ${employees[i].title}`)
// }

// 2

// function dog (breed) {
//     if (breed) {
//         return `my favorite dog breed is ${breed}.`;
//     }
//     else {
//         return `I like cats.`
//     }
// }

// let message = dog("pitbull")
// console.log(`When it comes to pets,`, message);

// let sad = dog()
// console.log(`When it comes to pets.`, sad)


//BOOK 2 CHAPTER 4 EXERCISES


function fizzBuzz (num, lim) {
	for (; num <= lim; num++) {
		if (num % 5 === 0 && num % 7 === 0) {
			console.log("fizzBuzz")
		}
		else if (num % 5 === 0) {
			console.log("fizz")
		}
		else if (num % 7 === 0) {
			console.log("buzz")
		}
		else {
			console.log(num)
		}
	}
}

fizzBuzz(1, 100)

//_____________________________________________________________________

// let bandNumber = 1

// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under) 

// const takeNumber = function () {

// }

//_____________________________________________________________________

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for ( i = 0; i < foods.length; i++) {
	grill(foods[i])
}

console.log(cookedFood)