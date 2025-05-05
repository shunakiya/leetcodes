/**
 * Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let zeroCols = [];
    let zeroRows = [];

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] === 0){
                if(!zeroRows.includes(row)) {
                    zeroRows.push(row);
                }
                if(!zeroCols.includes(col)) {
                    zeroCols.push(col);
                }
            }
        }
    }
    
    for(let i = 0; i < zeroRows.length; i++) {
        matrix[zeroRows[i]].fill(0);
    }
    
    for(let row = 0; row < matrix.length; row++){
        for(let i = 0; i < zeroCols.length; i++){
            let zeroColIndex = zeroCols[i];
            
            matrix[row][zeroColIndex] = 0;
        }
    }
}
