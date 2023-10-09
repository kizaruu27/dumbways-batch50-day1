// foreach
const arr = [1,2,3,4,5];

arr.forEach(function (item) {
    console.log(item);
});

// map
const array2 = [1,2,3,4,5];
const doubled = array2.map(item => {
    return item * 2;
});

console.log(doubled);

// filter
const arr3 = [1,2,3,4,5];
const evenNumbers = arr3.filter(item => {
    return item % 2 === 0 || item === 5;
});

console.log(evenNumbers);

// reduce
const arr4 = [1,2,3,4,5];
const sum = arr4.reduce(function (total, item) {
    console.log(total);
    return total + item;
}, 0);
console.log(sum);