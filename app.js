console.log("Hello World!\n==========\n");

console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i+=2) {
    if (i % 2 != 0) {
        console.log(i)
    }
}
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % 3 === 0) {
        console.log(i, "FIZZ");
    } else if (i % 5 === 0) {
        console.log(i, "BUZZ");
    }
}

console.log("EXERCISE 3:\n==========\n")
let x = -1;
while (x <= 99) {
    x = x + 1;

    if (x % 3 === 0 && x % 5 === 0) {
        console.log(x, "FIZZBUZZ");
        continue;
    } if (x % 3 === 0) {
        console.log(x, "FIZZ");
    } if (x % 5 === 0) {
        console.log(x, "BUZZ")
    }
    console.log(x.toString)
}

let result1 = " ";
let i = -1;
do {
    i += 2;
    result1 += `${i} `;
} while (i < 100-2);
console.log(result1)

console.log("==========")
let j = 1;
while (j <= 100-2) {
    j += 2;
    console.log(j)
}

// Exercise 4
console.log("EXERCISE 4:\n==========\n");

let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

let foundValue = false;

for (let i = 1; i <= n; i++) {
    if (i == numberToFind) {
        console.log("Found");
        break;
    }

    if (i == n) {
        console.log("Not Found");
        break;
    }
}

// Exercise 5
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 1) + 1); // creates a random number between 1 and 1000
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 1000

for (let i = start; i <= end; i++) {
    let output = " ";

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }
    console.log(`${i} ${output}`);

}
