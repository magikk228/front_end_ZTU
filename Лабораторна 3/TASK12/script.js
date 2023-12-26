let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

const min = Math.min(...arr);
const max = Math.max(...arr);

let parne = 0;
let neparne = 0;
let dvitsifri = 0;
let dodatne = 0;
let vidyemne = 0;

for (const num of arr) {
    if (num % 2 === 0) {
        parne++;
    } else {
        neparne++;
    }

    if (num >= 10 && num <= 99) {
        dvitsifri++;
    }

    if (num > 0) {
        dodatne++;
    } else if (num < 0) {
        vidyemne++;
    }
}


console.log(min);
console.log(max);
console.log(parne);
console.log(neparne);
console.log(dvitsifri);
console.log(dodatne);
console.log(vidyemne);

arr.sort((a, b) => a - b);
console.log(arr);
const reverse = arr.reverse();
console.log(reverse);
