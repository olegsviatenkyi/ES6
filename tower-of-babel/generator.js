const max = process.argv[2];
let FizzBuzz = function*(){
  let min = 0;
  while(min <= max){
    min++;
    if(min % 3 === 0 && min % 5 === 0) yield "FizzBuzz";
    if(min % 3 === 0) yield "Fizz";
    if(min % 5 === 0) yield "Buzz";
    yield min;    
  }
}();

for (let n of FizzBuzz) {
  console.log(n);
}
