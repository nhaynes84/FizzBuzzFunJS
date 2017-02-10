import contextFinder from './numberContext';

export const identifyTheNumberType = (number) => {
	return {number, message: contextFinder(number).message};
};

export const logTheNumberDetails = (result) => {
	console.log(`${result.number} - ${result.message}`);
};