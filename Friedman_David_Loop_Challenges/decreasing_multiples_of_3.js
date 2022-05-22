function decreasing_multiples_of_3() {
    for (var i = 100; i >= 0; i--) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}

decreasing_multiples_of_3();