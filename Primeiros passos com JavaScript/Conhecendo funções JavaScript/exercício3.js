const writeMyName = (name) => {
    return name;
}

const verifyAge = (age) => {
    if(age < 18) {
        console.log(writeMyName('Chris') + ' is a minor.');
    } else {
        console.log(writeMyName('Chris') + ' is an adult.');
    }
}

verifyAge(1);
verifyAge(17);
verifyAge(18);
verifyAge(122);