const gasPrice = 5.86;
const ethanolPrice = 4.86;
const fuelType = 'gas';
const kmPerLiter = 11;
const tripDistance = 800;
let costPerKilometer;

if(fuelType === 'ethanol') {
    costPerKilometer = ethanolPrice / kmPerLiter;
} else {
    costPerKilometer = gasPrice / kmPerLiter;
}

const totalCost = costPerKilometer * tripDistance;

console.log(`The total cost of your trip was R$ ${totalCost.toFixed(2)}`);