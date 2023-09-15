let arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let checkPrimeNum = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    return count === 2;
}
let numCheck = arrs.filter(element => checkPrimeNum(element));
console.log(numCheck);