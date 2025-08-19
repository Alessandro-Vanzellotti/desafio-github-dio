/* Crie uma classe para representar pessoas. Para cada pessoa, teremos os atributos nome, peso e altura. 
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura)). 
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC */

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateIMC() {
        return this.weight / Math.pow(this.height, 2);
    }

    categorizeIMC() {
        const imc = this.calculateIMC();
        
        if(imc < 18.5) {
           return 'underweight';
        }
        else if(imc >= 18.5 && imc < 25) {
            return 'normal weight';
        }
        else if(imc >= 25 && imc < 30) {
            return 'overweight';
        }
        else if(imc >= 30 && imc < 40) {
            return 'obese';
        } else {
            return 'morbidly obese';
        }
    }
}

const joseph = new Person('Joseph', 70, 1.75);
const mary = new Person('Mary', 90, 1.65);

console.log(joseph.categorizeIMC());
console.log(mary.categorizeIMC());