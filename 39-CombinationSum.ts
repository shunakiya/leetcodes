function combinationSum(candidates: number[], target: number): number[][] {
    let res = [];

    function dfs(i, cur, total){
        if(target === total){
            res.push([...cur]);
            return;
        }
        if(i >= candidates.length || total > target){
            return;
        }

        cur.push(candidates[i]);
        dfs(i, cur, total + candidates[i]);
        cur.pop();
        dfs(i + 1, cur, total);
    }

    dfs(0, [], 0);
    return res;
};
