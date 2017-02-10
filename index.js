import {identifyTheNumberType, logTheNumberDetails} from './services/fizzBuzzServices';

for (let i = 1; i <= 100; i++) {
	logTheNumberDetails(identifyTheNumberType(i));
}