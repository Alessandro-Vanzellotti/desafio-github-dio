const applyDiscount = (price, discount) => {
    return price - (price * (discount / 100));
}

const applyInterest = (price, interest) => {
    return price + (price * (interest / 100));
}

const calculateValue = (price, paymentType) => {
    let totalPrice;

    switch(paymentType) {
        case 'debit':
            totalPrice = applyDiscount(price, 10);
            break;
        case 'in cash':
            totalPrice = applyDiscount(price, 15);
            break;
        case '2 installments or less':
            totalPrice = price;
            break;
        case '2 installments or more':
            totalPrice = applyInterest(price, 10);
            break;
    }

    console.log(`The total price of the item is R$ ${totalPrice.toFixed(2)}`);
}

calculateValue(100, '2 installments or more');