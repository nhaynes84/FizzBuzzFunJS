import {identifyTheNumberType, logTheNumberDetails} from './services/fizzBuzzServices';

/**
 * @function executeService
 * @description
 *   This is just a helper function to fire off our Fizz Buzz service
 *   Basically all that is happening is the for loop runs and the numbers
 *   get evaluated and logged to the console.
 * */
const executeService = () => {
	for (let i = 1; i <= 100; i++) {
		logTheNumberDetails(identifyTheNumberType(i));
	}
};

executeService();
