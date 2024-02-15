function helloWorld() {
    return 'hello world';
}

function convertisseurTemperature(temperature, unite) {
    switch (unite) {
        case 'C':
            temperature = (temperature * 9 / 5) + 32;
            break;
        case 'F':
            temperature = (temperature - 32) * 5 / 9;
            break;
        default:
            temperature = 'Error, unite unknow';
            break;
    }
    return temperature;
}

export default { helloWorld, convertisseurTemperature };