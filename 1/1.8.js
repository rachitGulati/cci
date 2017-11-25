function printMatrix(matrix){
    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i].join('  '));
    }
}
function zeroMapper(matrix, row, column){
	let zeroRows = [];
	let zeroColumn = [];
	for(let i = 0; i < row; i++){
		for(let j = 0; j < column; j++ ){
			if(matrix[i][j] === 0){
			  zeroRows.push(i);
			  zeroColumn.push(j);
			}
		}
	}
	for(let i = 0; i < row; i++){
                for(let j = 0; j < column; j++ ){
                        if(zeroColumn.indexOf(j) !== -1 || zeroRows.indexOf(i) !== -1){
			  matrix[i][j] = 0;
                        }
                }
        }
}
let a = [];
a[0] = [11,12,0,14,15];
a[1] = [16,17,18,19,20];
a[2] = [21,22,23,24,25];
a[3] = [26,27,28,29,30];
a[4] = [31,32,33,34,35];
printMatrix(a);
zeroMapper(a, 5, 5);
console.log('-------------------');
printMatrix(a);

