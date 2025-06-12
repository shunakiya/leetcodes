function lengthOfLongestSubstring(s: string): number {
    let set = new Set();
    let l = 0;
    let longest = 0;

    for(let r = 0; r < s.length; r++){
        while(set.has(s[r])){
            set.delete(s[l]);
            l += 1;
        }

        let w = (r - l) + 1;
        longest = Math.max(longest, w);
        set.add(s[r]);
    }

    return longest;
};
