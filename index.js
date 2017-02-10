import {identifyTheNumberType, logTheNumberDetails} from './services/fizzBuzzServices';

/**
 * @function executeService
 * @param {number} startIndex - the number you want to start from (optional: defaults to 1)
 * @param {number} stopIndex - the last number you wish to evaluate (optional: defaults to 100)
 * @example executeService(200, 10000);
 * @description
 *   This is just a helper function to fire off our Fizz Buzz service
 *   Basically all that is happening is the for loop runs and the numbers
 *   get evaluated and logged to the console.
 * */
const executeService = (startIndex = 1, stopIndex = 100) => {
	for (let i = startIndex; i <= stopIndex; i++) {
		logTheNumberDetails(identifyTheNumberType(i));
	}
};

executeService();
