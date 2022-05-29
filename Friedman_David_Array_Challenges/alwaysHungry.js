function alwaysHungry(arr) {
    var hungry = true;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 'food') {
            console.log('yummy');
            hungry = false;
        }
    }
    if (hungry) {
        console.log("I'm hungry");
    }
}
var arr1 = [3, 6, 'food', 4, 'food', 1, 83];
var arr2 = [6,4,75,23,1,5,9];

alwaysHungry(arr1);
alwaysHungry(arr2);
