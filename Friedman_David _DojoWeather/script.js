function celsiusToFahrenheit(temperature) {
    return Math.round(temperature * (9 / 5) + 32);
}
function fahrenheitToCelsius(temperature) {
    return Math.round((temperature - 32) * (5 / 9));
}
function convertTemperatures(element) {
    // get array of all elements that contain temperature values
    // determine if we are converting from celcius to fahrenheit or vice versa
    // then iterate over the array and make the appropriate conversions
    // on the innerText value, which is the temperature value
    var allTempElements = document.querySelectorAll('.temps span');

    if (element.value === "°F") {
        for (var i = 0; i < allTempElements.length; i++) {
            var temperature = parseInt(allTempElements[i].innerText);
            allTempElements[i].innerText = celsiusToFahrenheit(temperature) + '°';
        }
    }
    else {
        for (var i = 0; i < allTempElements.length; i++) {
            var temperature = parseInt(allTempElements[i].innerText);
            allTempElements[i].innerText = fahrenheitToCelsius(temperature) + '°';
        }
    }
}
function loadingWeather() {
    alert("Loading weather report...");
}
function dismissCookie() {
    var cookie = document.querySelector('.cookie');
    cookie.remove();
}