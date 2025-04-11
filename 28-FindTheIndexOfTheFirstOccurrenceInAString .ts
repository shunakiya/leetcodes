function strStr(haystack: string, needle: string): number {
    if(haystack == needle){
        return 0;
    }

    let arr = haystack.split("");
    let word = needle.split("");
    let final = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == word[i]){
            final.push(arr[i])
        } else if(word.join('') == needle ){
            return haystack.indexOf(word.join(''));
        } else {
            final = [];
        }
    }  

    return -1;
};
