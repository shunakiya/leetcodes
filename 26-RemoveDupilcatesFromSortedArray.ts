function removeDuplicates(nums: number[]): number {
    let compare = 1;

    for(let i = 1; i < nums.length; i++){
        if(nums[i] != nums[i - 1]){
            nums[compare] = nums[i];

            compare++;
        }
    }
    return compare;
};
