// I've written five functions: equal1,equal2,equal3,equal4,equal5, defined six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

function equal1(){
  let a = v1,   
      b = v1;   
  return a + b;
}

function equal2(){
  let a =  v3
      b =  v1
  return a - b;
}

function equal3(){
  let a =  v1
      b =  v5
  return a * b;
}

function equal4(){
  let a =  v4
      b =  v5
  return a / b;
}

function equal5(){
  let a =  v2
      b =  v3
  return a % b;
}

console.log(equal5())
console.log(equal4())
// All very easy, though admittedly the modulo one at the end took a minute longer than I wanted, lol.



// Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
  return parseInt(hexString, 16)
}

console.log(hexToDec("FF"))
// The usefulness of the second argument of parseInt() strikes again! Really got to keep this radix thing in mind. This is the second time it's been the simplest and most elegant solution. I can't imagine how many lines of code I'd have to use if I didn't use parseInt() in this solution.