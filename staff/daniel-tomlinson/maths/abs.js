// function abs() {
//   // TODO implement me
//   let argument = arguments;
//   let argumentString = argument.toString();
//   let argumentSlice = argumentString.slice(19, 4);
//   //   console.log(argument);
//   console.log(argumentString);
// }

// function abs() {
//   // TODO implement me
//   return Math.abs(arguments[0]);
// }

//Absolute 2

// function abs1(a) {
//   if (a >= 0) return a;
//   else return a * -1;
// }

// function abs2(a) {
//   return Math.abs(a);
// }

//Absolute with if in one line => "conditional (ternary) Operator"

function abs(value) {
  return value < 0 ? value * -1 : value;
}
