//Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.
let arrLength = Number(prompt('Enter the length of the array:'));
let arr = [];

for (let i = 0; i < arrLength; i++) {
    arr.push(Number(prompt(`Enter an array element ${i + 1}:`)));
}

arr.sort((a,b)=> a - b);
console.log(`${arr}`);

arr.splice(1, 4);
console.log(`${arr}`);

//Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
 let array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

 //Знайти суму та кількість позитивних елементів
 let sum = 0;
 let posElem = 0;
 for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        posElem++;
        sum += array[i];
    }
 }
 console.log(`the number of positive elements: ${posElem} their sum ${sum}`);

 //Знайти мінімальний елемент масиву та його порядковий номер.
 let minElem = array[0];
 let seqNum = 0;

 for (let i = 0; i < array.length; i++) {
    if (array[i] < minElem) {
        minElem = array[i];
        seqNum = i;
    }
 }
 console.log(`the minimum array element:${minElem} its serial number: ${seqNum}`);

 //Знайти максимальний елемент масиву та його порядковий номер.
 let maxElem = 0;
 let seqNumElem = 0;

 for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElem) {
        maxElem = array[i];
        seqNumElem = i;
    }
 }
 console.log(`the maximum array element: ${maxElem},its serial number: ${seqNumElem}`);

 //Визначити кількість негативних елементів.
 let negativeElem = 0;

 for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeElem++;
    }
 }
console.log(`number of negative elements: ${negativeElem}`);

//Знайти кількість непарних позитивних елементів.
let oddPositiveElem = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        oddPositiveElem++;
    }
}
console.log (`number of odd positive elements: ${oddPositiveElem}`);

//Визначити кількість парних позитивних елементів.
let evenPositiveElem =0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        evenPositiveElem++;
    }
}
console.log (`number of even positive elements: ${evenPositiveElem}`);

//Знайти суму парних позитивних елементів.
let sumPositiveElem = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i]%2 == 0) {
        sumPositiveElem += array[i];
    }
}
console.log (`sum of even positive elements: ${sumPositiveElem}`);

//Знайти суму непарних позитивних елементів.

let sumEvenPositive = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i]%2 !== 0) {
        sumEvenPositive += array[i];
    }
}
console.log (`sum of odd positive elements: ${sumEvenPositive}`);

//Знайти добуток позитивних елементів.
let productPositiveElem = 1;

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        productPositiveElem *= array[i];
    }
}
console.log (`product of positive elements: ${productPositiveElem}`);

//Знайти найбільший серед елементів масиву, решту занулити.
let maxElement = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
    }
}

for (let i = 0; i < array.length; i++) {
    if (array[i] !== maxElement) {
        array[i] = 0;
    }
}

console.log (`the largest among array elements: ${maxElement}`);