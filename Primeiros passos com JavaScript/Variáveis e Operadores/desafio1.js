const gasPrice = 5.86;
const kmPerLiter = 11;
const tripDistance = 800;

const costPerKilometer = gasPrice / kmPerLiter;
const totalCost = costPerKilometer * tripDistance;

console.log(`The total cost of your trip was R$ ${totalCost.toFixed(2)}`);