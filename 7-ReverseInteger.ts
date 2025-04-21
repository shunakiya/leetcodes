function reverse(x: number): number {
    let sign = Math.sign(x);
    let reversed = x.toString().split("").reverse().join("");
    let reversedWithSign = parseInt(reversed) * sign;

    if(reversedWithSign < Math.pow(-2, 31) || reversedWithSign > (Math.pow(2, 31) - 1)){
        return 0;
    }
    
    return reversedWithSign; 
};
