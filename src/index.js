'use strict'

function commonElements() {

    const arr1 = [];
    const arr2 = new Set();

    for (let i = 0; i < 25; i++) {
        arr1.push(Math.floor(Math.random() * 100));
        arr2.add(Math.floor(Math.random() * 100));
    }

    const result = new Set();

        for (const number of arr1) {

            if (arr2.has(number)) {
                result.add(number);
            }

        }
    

    return [...result];
}

console.log(commonElements());
console.log(commonElements());
console.log(commonElements());
console.log(commonElements());

