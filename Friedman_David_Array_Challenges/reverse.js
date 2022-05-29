function reverse(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
var result = reverse(['a', 'b', 'c', 'd', 'e']);
var result2 = reverse([1,2,3,4,5,6]);
console.log(result);
console.log(result2);