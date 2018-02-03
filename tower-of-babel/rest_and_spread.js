var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
	let commaSep = val.split(',');
	commaSep.forEach(val => {
		if(val !== '') args.push(+val);
	});
});
let avg = (...args) => {
	let arg = args.reduce((previousValue, currentValue) => {
  	return previousValue + currentValue;
	});
	return arg/args.length;
}
console.log(avg(...args));