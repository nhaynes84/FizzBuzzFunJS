import contextFinder from './numberContext';

/**
 * @function identifyTheNumberType
 * @param {int} number - The number you wish to evaluate
 * @return {object} response with message and number
 * @description
 *   This function is used to identify which response to return for logging
 * */
export const identifyTheNumberType = (number) => {
	return {number, message: contextFinder(number).message};
};

/**
 *  @function logTheNumberDetails
 *  @param {object} result - The result which needs logged, {number, message}
 *  @description
 *    This is a helper method to handle formatting and logging messages to the console.
 * */
export const logTheNumberDetails = (result) => {
	console.log(`${result.number} - ${result.message}`);
};