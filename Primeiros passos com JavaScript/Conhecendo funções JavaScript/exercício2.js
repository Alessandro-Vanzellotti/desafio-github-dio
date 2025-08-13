const verifyAge = (age) => {
    if(age < 18) {
        console.log('You are a minor.');
    } else {
        console.log('You are an adult.');
    }
}

verifyAge(1);
verifyAge(17);
verifyAge(18);
verifyAge(122);