function isPalindrome(s: string): boolean {
    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("");

    if(string.length === 1){
        return true;
    }

    let mid = Math.floor(string.length / 2);
    let left = Math.floor(string.length / 2) - 1;
    let right = Math.floor(string.length / 2) + 1;

    for(let i = 0; i < string.length / 2; i++){
        if(string[left] != string[right]){
            return false;
        }
        left--;
        right++;
    }

    return true;
};
