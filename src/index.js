'use strict'

function commonElements() {

    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < 25; i++) {
        arr1.push(Math.floor(Math.random() * 100) + 1);
        arr2.push(Math.floor(Math.random() * 100) + 1);
    }

    let result = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
                result.push(arr1[i]);
            }

        }
    }

    return result;
}

console.log(commonElements());
console.log(commonElements());
console.log(commonElements());
console.log(commonElements());

