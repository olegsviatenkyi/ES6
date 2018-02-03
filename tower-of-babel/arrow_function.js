let inputs = process.argv.slice(2);
let result = inputs.map((string) => {
let firstLetter = string[0].toUpperCase();
	return firstLetter;
}).reduce((previousValue, currentValue) => {
	return previousValue + currentValue;
});
console.log(result);
