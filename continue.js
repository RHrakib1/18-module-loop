// break mane kono loop ses krte bebhar kora hoi
// continue mane holo kono element ship kore jai.. mane print kore na 
for (let i = 1; i < 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}



console.log("example ")
let n = 0;
while (n < 15) {
    n++;
    if (n % 5 !== 0) {
        continue;
    }
    console.log(n);
}



// task
console.log("example task for continue");
for (let i = 1; i <= 40; i++) {
    if (i % 2 == 1) {
        continue;
    }
    console.log(i);
}





// task 2
console.log("example task for continue 02");
for (let i = 55; i <= 85; i++) {
    if (i % 5 == 0) {
        console.log(i);
    }
}