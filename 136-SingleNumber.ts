function singleNumber(nums: number[]): number {
    if(nums.length == 1){
        return nums[0];
    }

    let sorted = nums.sort((a, b) => a - b);

    for(let i = 0; i < sorted.length; i+=2){
        if(i === sorted.length){
            return sorted[i];
        }

        if(sorted[i] !== sorted[i + 1]){
            return sorted[i];
        } 
    } 

    return -1;
};
