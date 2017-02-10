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