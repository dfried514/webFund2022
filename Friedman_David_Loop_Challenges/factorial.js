function factorial() {
    var product = 1;

    for (let i = 1; i <= 12; i++) {
        product *= i;
    }
    return product;
}

var result = factorial();

console.log("The value of result is " + result);