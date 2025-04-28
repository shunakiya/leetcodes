function topKFrequent(nums: number[], k: number): number[] {
     // traverse through array, then add each value to hash map
    // value with the greatest occurence is returned
    // [1, 1, 1, 2, 2, 3]
    // key = the number in array, value = occurence
    // based on k, return top k values
    
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else { 
            map.set(nums[i], 1);            
        }
    }

    let array = Array.from(map.entries());
    let sorted = array.sort((a, b) => b[1] - a[1]);

    let arr = [];

    for(let i = 0; i < k; i++){
        arr.push(sorted[i][0]);
    }

    return arr;
};
