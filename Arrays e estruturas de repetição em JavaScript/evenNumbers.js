// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado

const randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 18, 19, 26];

const printEvenNumbers = (list) => {

    for(i = 0; i < list.length; i++) {
        if(list[i] % 2 === 0) {
            console.log(list[i]);
        }
    }
}

printEvenNumbers(randomNumbers);