/* Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado. 
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para percorrer este percurso. */

class Car {
    brand;
    color;
    consumptionByKm;

    constructor(brand, color, consumptionByKm) {
        this.brand = brand;
        this.color = color;
        this.consumptionByKm = consumptionByKm;
    }

    calculateDriveCost(distanceInKm, gasPrice) {
        return distanceInKm * this.consumptionByKm * gasPrice;
    }
}

const fit = new Car('Honda', 'silver', 1/11);

console.log(fit.calculateDriveCost(100, 5.80));