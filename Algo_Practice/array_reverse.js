function array_reverse(array) {
    var i = 0;

    while (i < array.length / 2) {
        var temp = array[array.length - 1 - i];
        array[array.length - 1 - i] = array[i];
        array[i] = temp;
        i++;
    }
    return array;
}
var result1 = array_reverse([1,3,5,7,9,11]);
var result2 = array_reverse([2,4,6,8]);

console.log(result1);
console.log(result2);


