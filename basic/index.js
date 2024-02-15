function helloWorld() {
    return 'hello world';
}

export function convertisseurTemperature(temperature, unite) {
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

export function realCalculator(valueA, valueB, operator) {
    switch (operator) {
        case '+':
            result = valueA + valueB;
            break;
        case '-':
            result = valueA - valueB;
            break;
        case '*':
            result = valueA * valueB;
            break;
        case '/':
            result = valueA / valueB;
            break;
        default:
            result = 'Error, this operator is unknow';
            break;
    }
    return result;
}

export function drunkCalculator(valueA, valueB, operator) {
    switch (operator) {
        case '+':
            result = valueA + valueB + Math.random();
            break;
        case '-':
            result = valueA + valueB - Math.random;
            break;
        case '*':
            result = valueA + valueB * Math.random();
            break;
        case '/':
            result = valueA + valueB / Math.random();
            break;
        default:
            result = 'Error, this operator is unknow';
            break;
    }
}

export default helloWorld;