// ----------odd number ber korar simple niyom-------------
console.log("simple niyome odd")
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }
}


// vinno niyome odd ber kora
console.log("odd deferance niyom a ");
for (let i = 1; i < 30; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}




// simple niyome even number
console.log("example simple even number");
for (let i = 10; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}



// vinno niyome even number bar korar niyom
console.log("example onno niyome even bar korar niyom");
for (i = 20; i <= 30; i++) {
    if (i % 2 !== 1) {
        console.log(i);
    }
}



console.log("example 5 diye vag kora jai amn number")
// 1-30 pojonot number k 5 dara vag krle vagfol 0 hbe amn koyekti number bar kora
for (i = 1; i <= 30; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}





console.log("example 5 or 3 diye vag kora jai amn number")
// 1-30 pojonot number k 5 dara vag krle vagfol 0 hbe amn koyekti number bar kora
for (i = 1; i <= 30; i++) {
    if (i % 5 == 0 || i % 3 == 0) {
        console.log(i);
    }
}




// sudhu 3 and 5 die jai amn number
console.log("examle divaided");
for (i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}





// 1-20 number 3 diya vag gele se gular sum ber kora
console.log("example*******______");
let sum=0;
for (i = 1; i <= 20; i++) {
    if (i % 3 === 0){
        console.log(i);
        sum=sum+i;
    }
}
console.log("the sum of numbers :", sum);
