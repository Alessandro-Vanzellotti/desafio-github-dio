const entries = [10, 42, 67, 2, 6, 88, 50, 10, 98, 23];
let i = 0;

const getEntries = () => {
    const value = entries[i];
    i++;
    return value;
}

const print = (number) => {
    console.log(number);
}

module.exports = {getEntries, print}; 