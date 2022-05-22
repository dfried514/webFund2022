function sigma() {
    var sum = 0;
    
    for (var i = 1; i <= 100; i++) {
        sum += i;
    }
    return sum;
}

var result = sigma();

console.log("The value of result is " + result);