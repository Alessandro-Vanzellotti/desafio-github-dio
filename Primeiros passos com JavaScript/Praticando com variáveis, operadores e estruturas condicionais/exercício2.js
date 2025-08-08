const weight = 92;
const height = 1.50;
const imc = weight / (height * height);
let condition;

if(imc < 18.5) {
    condition = 'underweight';
}
else if(imc >= 18.5 && imc < 25) {
    condition = 'normal weight';
}
else if(imc >= 25 && imc < 30) {
    condition = 'overweight';
}
else if(imc >= 30 && imc < 40) {
    condition = 'obese';
} else {
    condition = 'morbidly obese';
}

console.log(`This person's IMC is ${imc} and their condition is ${condition}`);
