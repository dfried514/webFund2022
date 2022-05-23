function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    }
    return pizza;
}

function randomPizza() {
    var pizzaItems = {
        crustType: ["thin", "deep dish", "hand tossed", "regular"],
        sauceType: ["marinara", "pesto", "traditional", "none"],
        cheeses: ["mozzarella", "parmesan", "cheddar", "feta", "extra", "none"],
        toppings: ["pepperoni", "sausage", "mushrooms", "olives", "onions"]
    }
    var randomCrustIndex = Math.floor(Math.random() * pizzaItems.crustType.length);
    var randomSauceIndex = Math.floor(Math.random() * pizzaItems.sauceType.length);
    
    var randomNumberOfCheeses = Math.floor(Math.random() * (pizzaItems.cheeses.length - 1) + 1);
    var randomNumberOfToppings = Math.floor(Math.random() * (pizzaItems.toppings.length - 1) + 1);
    
    var randomCheeses = [];
    var randomToppings = [];

    for (let i = 1; i <= randomNumberOfCheeses; i++) {
        var randomCheesesIndex = Math.floor(Math.random() * pizzaItems.cheeses.length);
        if (!randomCheeses.includes(pizzaItems.cheeses[randomCheesesIndex])) {
            randomCheeses.push(pizzaItems.cheeses[randomCheesesIndex]);
        }
    }
    for (let i = 1; i <= randomNumberOfToppings; i++) {
        var randomToppingsIndex = Math.floor(Math.random() * pizzaItems.toppings.length);
        if (!randomToppings.includes(pizzaItems.toppings[randomToppingsIndex])) {
            randomToppings.push(pizzaItems.toppings[randomToppingsIndex]);
        }
    }
    var pizza = {
        crustType: pizzaItems.crustType[randomCrustIndex],
        sauceType: pizzaItems.sauceType[randomSauceIndex],
        cheeses: randomCheeses,
        toppings: randomToppings
    }
    return pizza; 
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin", "marinara", ["mozzerella", "cheddar"], ["pepperoni", "mushrooms"]);
var pizza4 = pizzaOven("regular", "marinara", ["mozzerella", "parmesan", "cheddar"], ["pepperoni", "sausage", "mushrooms", "olives"]);
var pizza5 = randomPizza();

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(pizza5);