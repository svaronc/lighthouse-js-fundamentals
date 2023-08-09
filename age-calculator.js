function ageCalculator(name, yearOfBirth, currentYear) {
  let old = currentYear - yearOfBirth;
  return `${name} is ${old} years old.`;
}

console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
