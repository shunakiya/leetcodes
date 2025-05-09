function majorityElement(nums: number[]): number[] {
    // create a map and keep track of how many times the value occured
    // iterate through the entire list n = nums.length times 
    // if map.value() > Math.floor(n / 3) return map.keys()

    let map = new Map();
    let res = [];

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for(let [key, value] of map){
        if(value > Math.floor(nums.length / 3)) res.push(key);
    }

    return res;
};
