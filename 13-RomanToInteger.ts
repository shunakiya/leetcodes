const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function romanToInt(s: string): number {
    let result = 0;

    const numbers: number[] = s.split('').map(v => romans[v]);

    for (let i = 0; i < numbers.length; i++) {

        const currentNum = numbers[i];
        const nextNum = numbers[i + 1] || 0;

        if (currentNum < nextNum) {
            result -= currentNum;   
        } else {
            result += currentNum;
        }
    }
    return result;
}

