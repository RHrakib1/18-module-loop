/**
 * ------------------for loop structure------------
 * for(loop variable declearation; loop condition; incriment/decriment){
 * 
 *         loop statement
 * 
 * }
 * 
 * 
 */
// example for loop
for (let num = 0; num < 5; num++) {
    console.log(num);
}




// for loop diye even numb bar kora
for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
        console.log("even number:", num);
    }
}



console.log('array er sahajje for loop bebohar');
let component = ['cpu', 'ram', 'memory', 'timer', 'motherbord'];
for (let i = 0; i < component.length; i++) {
    console.log(component[2]);
}








console.log('array er sahajje for loop bebohar');

let raa = [10, 20, 30, 40, 50, 60];
let oddOfSum = 0;
let evenOfSum = 0;

for (let i = 0; i < raa.length; i++) {
    const x = raa[i];
    if (x % 2 == 0) {
        oddOfSum = oddOfSum + i;
    }
    else {
        evenOfSum = evenOfSum + i;
    }
}
console.log(oddOfSum);
console.log(evenOfSum);











conosle.log("exampple for loop in array to the sum")
numbert = [11, 55, 48, 64, 20, 125, 111, 80];
let sumofOdd = 0;//11, 55, 125, 111
let sumofEven = 0;//48, 64, 20, 80
for (let i = 0; i < numbert.length; i++) {
    const x = numbert[i];
    if (x % 2 === 0) {
        sumofEven += x;
    }
    else {
        sumofOdd += x;
    }
}
console.log(sumofEven);
console.log(sumofOdd);
