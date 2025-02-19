function twoSum(nums: number[], target: number): number[] {
    let firstValue:number = 0;
    let outputArray:number[] = [];
    let searching = true;

    while(searching){
        for(let i = 0; i < nums.length; i++){
            let counter = 0;
            let secondValue = nums[i + 1 + counter]

            if(nums[firstValue] + secondValue == target && firstValue!= (i + 1 + counter)){
                outputArray.push(firstValue, i + 1 + counter);

                return outputArray;
            } else {
                counter++;
            }
        }

        firstValue++;
    }
};
