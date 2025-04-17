function isPalindrome(s: string): boolean {
    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split("");

    if(string.length === 0 || string.length === 1){
        return true;
    }

    let left = 0;
    let right = string.length - 1;

    for(let i = 0; i < string.length / 2; i++){
        if(string[left] != string[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
};
