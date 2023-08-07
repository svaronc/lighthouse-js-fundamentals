//example one

const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

//example two
const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick put a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves are fine");
} else {
  console.log("Short sleeves are fine");
}

console.log("Now you're ready to go outside!");

// example three using &&

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are elegible to vote");
}

// example four
if (temperature < -40 || temperature > 40) {
  console.log("Leave your umbrella at home");
}
