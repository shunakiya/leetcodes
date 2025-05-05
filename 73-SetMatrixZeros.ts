/**
 * Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let zeroCols = new Set();
    let zeroRows = new Set();

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] === 0){
                zeroRows.add(row);

                zeroCols.add(col);
            }
        }
    }
    
    let zeroRowsArray = Array.from(zeroRows) as number[];
    let zeroColsArray = Array.from(zeroCols) as number[];
    
    for(let i = 0; i < zeroRowsArray.length; i++) {
        matrix[zeroRowsArray[i]].fill(0);
    }
    
    for(let row = 0; row < matrix.length; row++){
        for(let i = 0; i < zeroColsArray.length; i++){
            let zeroColIndex = zeroColsArray[i];

            matrix[row][zeroColIndex] = 0;
        }
    }
}
