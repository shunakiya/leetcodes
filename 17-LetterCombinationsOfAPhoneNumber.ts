function letterCombinations(digits: string): string[] {
    let res = [];
    
    if(!digits) return res;

    let digitLetters = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
    ])

    function backtrack(i, currentString){
        if(currentString.length === digits.length){
            res.push(currentString);
            return;
        }

        let letters = digitLetters.get(digits[i])

        for(let c = 0; c < letters.length; c++){
            backtrack(i + 1, currentString + letters[c]);
        }
    }

    backtrack(0, "");

    return res;
};
