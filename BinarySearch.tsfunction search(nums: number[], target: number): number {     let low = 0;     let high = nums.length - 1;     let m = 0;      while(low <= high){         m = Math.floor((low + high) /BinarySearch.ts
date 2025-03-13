function search(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    let m = 0;

    while(low <= high){
        m = Math.floor((low + high) / 2);

        if(nums[m] === target){
            return m;
        } else if (nums[m] > target){
            high = m - 1 ;
        } else {
            low = m + 1;
        }
    }

    return -1;
};
