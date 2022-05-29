function fibonacciArray(n) {
    if (n === 0) return [];
    if (n === 1) return [0];

    var fibArr = [0, 1];

    for (var i = 3; i <= n; i++){
        fibArr[i - 1] = fibArr[i - 2] + fibArr[i - 3];
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result);