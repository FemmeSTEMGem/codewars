// Time to test your basic knowledge in functions! Return the odds from a list:
// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

function odds(values){
  return values.filter(x => x % 2 !== 0);
}

console.log(odds([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
// Easy peasy. Too bad we're not in Ruby land or we could just say .iseven? or .isodd?. Though I missed the crucial bit where I could have shortened things here by just saying (x => x % 2) and left it there.