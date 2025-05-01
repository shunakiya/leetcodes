function groupAnagrams(strs: string[]): string[][] {
    let map = new Map();

    for(let i = 0; i < strs.length; i++){
        let sorted = strs[i].split('').sort().join('');

        if(!map.has(sorted)){
            map.set(sorted, [strs[i]]);
        } else {
            let arr = map.get(sorted);

            arr.push(strs[i]);
        }
    }

    return Array.from(map.values());
};
