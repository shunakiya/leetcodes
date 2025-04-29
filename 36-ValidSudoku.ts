function isValidSudoku(board: string[][]): boolean { 
    let row = new Array(9).fill(null).map(() => new Set());
    let col = new Array(9).fill(null).map(() => new Set());
    let square = new Array(9).fill(null).map(() => new Set());

    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            if(board[r][c] == ".") continue;

            if(row[r].has(board[r][c]) || 
            col[c].has(board[r][c]) || 
            square[(Math.floor(r/3) * 3 + Math.floor(c/3))].has(board[r][c])){
                return false;
            }

            row[r].add(board[r][c]);
            col[c].add(board[r][c]);
            square[(Math.floor(r/3) * 3 + Math.floor(c/3))].add(board[r][c]);
        }
    }
    return true;
};
