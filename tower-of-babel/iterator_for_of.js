const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let min = 0;
    return{
      next(){
        min++;
        if(min % 3 === 0 && min % 5 === 0) return {done: false, value: "FizzBuzz"};
        if(min % 3 === 0) return {done: false, value: "Fizz"};
        if(min % 5 === 0) return {done: false, value: "Buzz"};
        if(min > max) return { done: true };
        return {done: false, value: min};    
      }
    }
  }
};

for (let n of FizzBuzz) {
  console.log(n);
}
