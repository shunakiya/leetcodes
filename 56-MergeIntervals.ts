function merge(intervals: number[][]): number[][] {
    // sort the arrays (comapre start_i) from least to greatest
    // go through array and check if start_i is between start_i and end_i of comparing array
    // else append the array to res

    if(intervals.length === 1) return intervals;

    let sorted = intervals.sort((a, b) => a[0] - b[0]);
    let res = [intervals[0]];

    for(let i = 0; i < intervals.length; i++){
        let current = intervals[i];
        let next = res[res.length - 1];

        if(next[1] >= current[0]){
            next[1] = Math.max(current[1], next[1]);
        } else {
            res.push(current);
        }
    }

    return res;
};
