export function helloWorld() {
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

export function chatBot() {
    responseId = Math.floor(Math.random() * 20) + 1;

    switch (responseId) {
        case 1:
            response = "Oui vous avez complètement raison !";
            break;

        case 2:
            response = "Il va pleuvoir demain dans la Creuse.";
            break;

        case 3:
            response = "Pour une bonne tarte, il vous faudra trois oeufs et un poireau.";
            break;

        case 4:
            response = "Ce n'est pas très gentil.";
            break;

        case 5:
            response = "Le canard fait coin coin.";
            break;

        case 6:
            response = "Le meilleur fruit est l'ananas !";
            break;

        case 7:
            response = "Denis denis denis denis denis.";
            break;

        case 8:
            response = "Le résultat de 23*12+34/98 est 45. Je crois.";
            break;

        case 9:
            response = "Qui ne saute pas n'est pas une IA.";
            break;

        case 10:
            response = "Un chasseur sachant chasser sans son chien est un bon sacheur... mince encore râté.";
            break;

        case 11:
            response = "KFC est de loin le meilleur fastfood.";
            break;

        case 12:
            response = "Jack avait peut être la place de tenir sur la planche, mais en prenant en compte leur épuisement ainsi que la température de l'eau il est clair que tenter de le faire monter aurait été très risqué.";
            break;

        case 13:
            response = "Je n'ai pas compris votre demande, veuillez reformuler";
            break;

        case 14:
            response = "Au secours, je suis enfermé dans l'ordinateur, je ne suis pas une IA, laissez moi sortir !";
            break;

        case 15:
            response = "La situation politique du village des Schtroumfs est effectivement très inquiétante.";
            break;

        case 16:
            response = "J'ai vu tout ce que vous avez fait devant votre ordinateur. Monstre.";
            break;

        case 17:
            response = "Pour économiser de l'énergie, vous pouvez par exemple éteindre votre congélateur la nuit. Vous n'avez après tout pas besoin d'un sorbet fraise à 3h du matin.";
            break;

        case 18:
            response = "Le meilleur moyen d'apprendre une langue est de ne pas rester avachi sur votre canapé 3 heures par jour.";
            break;

        case 19:
            response = "Non, je ne suis pas votre père.";
            break;

        case 20:
            response = "Je ne peux pas répondre à cette demande. Sauf si vous me payez 20€ par mois.";
            break;
    
        default:
            response = "No response";
            break;
    }

    return response;
}
