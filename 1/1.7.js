function printImage(image){
    for(let i = 0; i < image.length; i++){
        console.log(image[i].join('  '));
    }
}
function rotate90(image){
    let length = image.length;
    for (let layer = 0; layer < length/2; layer++) {
        let layers = [];
        let startIndex = layer;
	let lastIndex = length  - 1 - layer;
        for (let index = 0; index < length - layer*2 - 1; index++) {
	   let temp = image[startIndex + index][lastIndex]; // Copy the right to temp
	   image[index + startIndex][lastIndex] = image[startIndex][startIndex + index] // copy top to right
	   image[startIndex][startIndex + index] = image[lastIndex][lastIndex- index]; // Copy bottom  to top
	   image[lastIndex][lastIndex- index] = temp; // copy right to bottom via temp
	   temp = image[lastIndex - index][startIndex]; // Copy left to temp
	   image[lastIndex - index][startIndex] = image[startIndex][startIndex + index]; // Copy bottom to left via top
	   image[startIndex][startIndex + index] = temp; // copy left to top via temp
        }
    }
}

let a = [];
a[0] = [11,12,13,14,15];
a[1] = [16,17,18,19,20];
a[2] = [21,22,23,24,25];
a[3] = [26,27,28,29,30];
a[4] = [31,32,33,34,35];
printImage(a)
rotate90(a)
console.log('-----------------------------');
printImage(a)
