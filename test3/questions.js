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

/*let convertArrayToObject = (array) => array.reduce((result, item, length, table) => result[item])

for (let i = 0; i <= array.length - 1; i++) {
    console.log(array[i]);
}*/


let getAllLetters = (array) => console.log(array.map((a) => a.split(',')).flat());


let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
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