/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let arr = [...nums];
    let length = nums.length;

    for(let i = 0; i < length; i++){
        let index = (i + k) % length;

        nums[index] = arr[i];
    }
};
