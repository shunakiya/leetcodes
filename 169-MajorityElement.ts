function majorityElement(nums: number[]): number {
    if(nums.length === 1) return nums[0];

    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1);
        } else { 
            map.set(nums[i], 1);            
        }
        
        if(map.get(nums[i]) > Math.floor(nums.length / 2)){
            return nums[i];
        }
    }
};
