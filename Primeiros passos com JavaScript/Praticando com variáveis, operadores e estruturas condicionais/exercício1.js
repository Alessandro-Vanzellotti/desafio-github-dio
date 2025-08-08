/* - média menor que 5, reprovação;
- média entre 5 e 7, recuperação;
- média acima de 7, passou de semestre; */

const grade1 = 10;
const grade2 = 8;
const grade3 = 5;

const averageGrade = (grade1 + grade2 + grade3) / 3;
let placement;

if(averageGrade > 7) {
    placement = 'aprovação';
}
else if(averageGrade >= 5 && averageGrade <= 7) {
    placement = 'recuperação';
} else {
    placement = 'reprovação';
}

console.log(`The student's placement is: ${placement}`);