const isEven = function(num){
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);
// we can simplify the code by printing to the console the result instead of saving the result in a variable.
console.log(isEven(10));
console.log(isEven(11));
