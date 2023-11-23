var celsiusToFahrenheit = celsiusTemperatures =>{

    var fahrenheitTemperatures = celsiusTemperatures.map(temp => temp * 1.8 + 32);
    return fahrenheitTemperatures;
}

function printArrays(array) {
    var array2 = array.join(' ');
    console.log(array2);
}

var celsiusArray = [20, 30, 50];
var fahrenheitArray = celsiusToFahrenheit(celsiusArray);

printArrays(celsiusArray);
printArrays(fahrenheitArray);
