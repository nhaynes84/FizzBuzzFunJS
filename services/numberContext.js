import {
	fizzBuzzStrategy, fizzStrategy,
	buzzStrategy, noFizzNoBuzzStrategy
} from './fizzBuzzStrategies';

const context = [
	{
		strategy: fizzBuzzStrategy,
		message: 'I am a FIZZ_BUZZ'
	},
	{
		strategy: fizzStrategy,
		message: 'I am a FIZZ!'
	},
	{
		strategy: buzzStrategy,
		message: 'I am a BUZZ!'
	},
	{
		strategy: noFizzNoBuzzStrategy,
		message: 'Mister Fizz Buzz No...'
	}
];

/**
 * @function contextFinder
 * @param {number} number
 * @description
 *   This function takes in a number; evaluates it with a strategy
 *   and returns the appropriate response
 * @example const result = contextFinder(5); // result is {strategy:buzzStrategy,message:'I am a BUZZ!'}
 * */
const contextFinder = (number) => {
	let response = {};

	context.some(item => {
		if (item.strategy(number)) {
			response = item;
		}

		return item.strategy(number);
	});

	return response;
};

export default contextFinder;