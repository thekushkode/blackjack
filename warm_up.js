// test array
// const numArray = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5'];

// // remove duplicates from array- used "[...new Set(array)]""
// const removeDuplicates = function (array) {
//     let newArray = [...new Set(array)];
//     return newArray
// };

// console.log(removeDuplicates(numArray));

//warm-up2
const test1 = [10, 5, 9, 4, 17];
const test2 = [14, 12, 20, 9, 6, 11];

const sort = function (array) {
    const arrayLength = array.length;
    const newArray = [];
    for (let i = 0; i < arrayLength; i++) {
        let smallNum = Math.min(...array);
        newArray.push(smallNum);
        const index = array.indexOf(smallNum);
        array.splice(index, 1);
    };
    return newArray;
};
console.log(sort(test1));
console.log(sort(test2));

// this works 
// array.sort(function(a, b) {
//     return a - b
// });
// console.log(array);
