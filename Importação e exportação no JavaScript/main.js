const { getEntries, print } = require('./auxiliary-functions');

let biggestNumber = 0;
let numberOfStudents = getEntries(); // isso aqui não tá legal

for(i = 0; i < numberOfStudents; i++) {
    const newNumber = getEntries();
    if(newNumber > biggestNumber) {
        biggestNumber = newNumber;
    }
}

print(biggestNumber);