function isAnagram(s: string, t: string): boolean {
    if(s.length === 0 || t.length === 0){
        return false
    }

    if(s.length != t.length){
        return false;
    }

    let map = new Map();

    for(let c of s){
        if(map[c] === undefined){
            map[c] = 1;
        } else {
            map[c]++;
        }
    }    

    for(let c of t){
        if(map[c] === undefined){
            return false
        } 
        map[c]--;
    }

    for(let key in map){
        if(map[key] != 0){
            return false;
        }
    }

    return true;
};
