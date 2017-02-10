import {identifyTheNumberType, logTheNumberDetails} from './src/services/fizzBuzzServices';

for (let i = 1; i <= 100; i++) {
	logTheNumberDetails(identifyTheNumberType(i));
}