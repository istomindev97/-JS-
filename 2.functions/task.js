function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}

		if (arr[i] > max) {
			max = arr[i];
		}

		sum += arr[i];
	}

	let avg = sum / arr.length;

	return {
		min: min,
		max: max,
		avg: +avg.toFixed(2)
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let index = 0; index < arr.length; index++) {
		sum += arr[index];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);

	return max - min;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let index = 0; index < arr.length; index++) {
		if (arr[index] % 2 === 0) {
			sumEvenElement += arr[index];
		} else {
			sumOddElement += arr[index];
		}
	}

	return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let index = 0; index < arr.length; index++) {
		if (arr[index] % 2 === 0) {
			sumEvenElement += arr[index];
			countEvenElement += 1;
		}
	}

	return sumEvenElement / countEvenElement;
}


function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		let resultOfGivenFunc = func(...arrOfArr[i]);

		if (resultOfGivenFunc > maxWorkerResult) {
			maxWorkerResult = resultOfGivenFunc;
		}
	}

	return maxWorkerResult;
}
