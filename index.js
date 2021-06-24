const lowerNum = 0;
const higherNum = 100;

for (let a = lowerNum; a <= higherNum; a++) {
    let num = 0;

    for (let b = 2; b < a; b++) {
        if (a % b == 0) {
            num = 1;
        }
    }

    if ( a > 1 && num == 0) {
        console.log(a);
    }
}
