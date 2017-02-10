export const fizzBuzzStrategy = (thisNumber) => {
	return ((thisNumber % 3) === 0
	&& (thisNumber % 5) === 0);
};

export const buzzStrategy = (thisNumber) => {
	return ((thisNumber % 5) === 0);
};

export const fizzStrategy = (thisNumber) => {
	return ((thisNumber % 3) === 0);
};

export const noFizzNoBuzzStrategy = (thisNumber) => {
	return true;
};