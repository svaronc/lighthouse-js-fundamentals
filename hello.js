const sayHello = function (name) {
  console.log("Hello, " + name);
};

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

//example usign console.log()
const sayHelloToConsole = function(name){
  console.log("Hello, " + name);
}

sayHelloToConsole('Jhon');

const returnSayHello  = function(name){
  return "Hello, " + name;
}

const greeting = returnSayHello("Jhon")
console.log(greeting);

// the first example is going to print on console the message and the second one save the message into a variable and then you can use the variable to printed out in console or do other stuff