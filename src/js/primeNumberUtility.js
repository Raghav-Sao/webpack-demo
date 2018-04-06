export const isPrimeNumber = number => {
	for (let i = 2, checkRange = Math.sqrt(number); i <= checkRange; i++)
		if (number % i === 0) return false;
	return number > 1;
};

export const getNextPrime = number => {
	let searchingPrime = true;
	while (!isPrimeNumber(++number));
	return number;
};
