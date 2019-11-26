let selectElementsStartingWithA = (array) => {
    return array.filter(x => /^[a]/g.exec(x));
}

let selectElementsStartingWithVowel = (array) => {
    return array.filter(x => /^[aeiou]/g.exec(x));
}

let removeNullElements = (array) => {
    return array.filter(x => x !== null);
}

let removeNullAndFalseElements = (array) => {
    return array.filter(x => x !== null && x !== false);
}

let reverseWordsInArray = (array) => {
    return array.map(x => x.split("").reverse().join(""));
}

let everyPossiblePair = (array) => {
    return array.sort().map((elm, i, arr) => arr.filter(el => el !== elm)).reverse()
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    return [element].concat(array);
}

let sortByLastLetter = (array) => array.map(a => a.split("").reverse().join('')).sort().map(x => x.split("").reverse().join(''));




let getFirstHalf = (string) => {
    return string.substr(0, 3);
}

let makeNegative = (number) => {
    return number < 0 ? number : -number;
}

let numberOfPalindromes = (array) => {
    return array.filter(a => a.split("").reverse().join('') == a).length;
}

let shortestWord = (array) => {
    return array.reduce((shortest, currentW) => (currentW.length < shortest.length) ? currentW : shortest);
}

let longestWord = (array) => {
    return array.reduce((shortest, currentW) => (currentW.length > shortest.length) ? currentW : shortest);

}

let sumNumbers = (array) => {
    return array.reduce((a, b) => a + b);
}

let repeatElements = (array) => {
    return array.concat(array);
}

let stringToNumber = (string) => {
    return +string;
}

let calculateAverage = (array) => {
    return array.reduce((a, b) => a + b) / array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let newArray = array.map((elem, index, arr) => elem <= 5 ? elem : elem = null)
    return newArray.slice(0, newArray.indexOf(null));
}

let convertArrayToObject = (array) => {
    let newObj = {};
    for (let i = 0; i <= array.length - 1; i++) {
        if (i % 2 == 0) {
            newObj[array[i]] = " ";
        } else {
            newObj[array[i - 1]] = array[i];
        }
    }
    return newObj;
}

let getAllLetters = (array) => Array.from(new Set(array.join('').split("").sort()));

let swapKeysAndValues = (object) => {
    //console.log(object);
    let newObj = {};
    for (id in object) {
        newObj[object[id]] = id;
    }
    return newObj;
}

let sumKeysAndValues = (object) => {
    let total = 0;
    for (val in object) {
        total += +val + object[val];
    }
    return total;


}
let removeCapitals = (string) => {
    let finalString = "";
    for (let i = 0; i <= string.length - 1; i++) {
        if ((string[i].charCodeAt() > 90) || (string[i].charCodeAt() == 32)) {
            finalString += string[i];
        }
    }
    return finalString;
}

let roundUp = (number) => Math.ceil(number);



let formatDateNicely = (date) => {
    console.log(date);
    let day = ("0" + date.getDate()).slice(-2);
    let month = date.getMonth() + 1;
    month = ("0" + month).slice(-2);
    let year = date.getUTCFullYear();
    return (`${day}/${month}/${year}`)
}

let getDomainName = (string) => {

}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {


}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5 / 9);
}

let letterPosition = (array) => {
    return array.map(a => a.toUpperCase().charCodeAt() - 64);
}