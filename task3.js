
var arr = [14, 2, 3, 4, 1, 7, 10, 8, 4, 15];

function findMin(arr) {
	min = arr[0];
 	for (i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
        	min = arr[i];
 		 }
	}
	return min;
}
console.log(findMin (arr));

function findMax(arr) {
	max = arr[0];
 	for (i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
        	max = arr[i];
 		 }
	}
	return max;
}
console.log(findMax (arr));

function calcSumm(arr){
	var sum = 0;
	for (var i = 0; i <= arr.length-1; i++) {
		sum = sum + arr [i];
	}
	return sum;
}
console.log(calcSumm (arr));

function calcAverageValue (arr) {
	var sum = 0;
	for (var i = 0; i <= arr.length-1; i++) {
		sum = sum + arr [i];
	}
	var av = sum / arr.length;
	return av;
}
console.log(calcAverageValue(arr));

function displayOdd(arr) {
	var arrOdd =[];
	var j = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0){
			arrOdd[j] = arr[i];
			j++;
		}
	}
	return arrOdd;
}
console.log(displayOdd (arr));


var mass=[[1,2,3,4,5],
		  [4,-5,6,7,4],
		  [7,8,9,4,5],
		  [1,3,5,-6,8],
		  [5,7,1,5,11]];

function replaceNum(mass) {
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			if (i===j) {
				if (mass[i][j] > 0) {
					mass[i][j] = 20;
				}
				else {
					mass[i][j] = 10;
				}
			}
		}
	}
	return mass;
}

console.log(replaceNum (mass));