function coinChange(coins: number[], amount: number): number {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for(let i = 1; i <= amount; i++){
        for(let j = 0; j < coins.length; j++){
            if(coins[j] <= i){
                dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
