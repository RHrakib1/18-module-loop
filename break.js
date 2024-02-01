// break er madhome kono loop k thamano hoi
for (let i = 1; i <= 120; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}
console.log("break this loop ")


console.log("example of while looop")
let n = 20;
while (n < 50) {
    console.log(n);
    if (n > 30) {
        break;
    }
    n++;
}


console.log("task for break");
// example break
for (let i = 1; i <= 200; i++) {
    if (i >= 100) {
        break;
    }
    console.log(i);
}




console.log("task 2");
// break for sum task
let i = 1;
let sum=0;
while (i <= 200) {
    console.log(i);
    sum=sum+i;
    if(sum>=100){
        break;
    }
    i++;
}
console.log("the sum is", sum)