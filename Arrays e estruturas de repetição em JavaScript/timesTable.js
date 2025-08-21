// Crie um programa que, dado um número, imprima sua tabuada.

const printTimesTable = (number) => {

    for(i = 1; i < 10; i++) {
        console.log(`${number}x${i} = ${number*i}`);
    }
}

printTimesTable(1);
printTimesTable(3);
printTimesTable(5);
printTimesTable(7);
printTimesTable(9);