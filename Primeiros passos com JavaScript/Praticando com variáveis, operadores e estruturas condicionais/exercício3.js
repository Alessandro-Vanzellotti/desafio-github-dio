const price = 100;
const paymentType = '2 installments or more';
let totalPrice;

switch(paymentType) {
    case 'debit':
        totalPrice = price * 0.9;
        break;
    case 'in cash':
        totalPrice = price * 0.85;
        break;
    case '2 installments or less':
        totalPrice = price;
        break;
    case '2 installments or more':
        totalPrice = price * 1.1;
        break;
}

console.log(`The total price of the item is R$ ${totalPrice.toFixed(2)}`);