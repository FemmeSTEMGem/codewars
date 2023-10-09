// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

// function cookie(x){
//   return typeof x === 'string' ? "Who ate the last cookie? It was Zach!" :
//   typeof x === 'number' ? "Who ate the last cookie? It was Monica!" :
//   "Who ate the last cookie? It was the dog!"
// }

function cookie(x){
  return `Who ate the last cookie? It was ${
    typeof x === 'string' ? 'Zach!' :
    typeof x === 'number' ? 'Monica!' :
    'the dog!'}`
}

console.log(cookie(26))
// Interestingly, the tests didn't like it when I moved the ${ down to its own line. I thought it looked cleaner there, but the code interpreted it as a new line (\n). I like my solution best because a lot of the others use repetitive code to restate the entire sentence each time.