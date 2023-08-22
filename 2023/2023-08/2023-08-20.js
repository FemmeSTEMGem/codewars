// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).

function apple(x){
  return x**2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
}

console.log(apple(28))
// Simple enough ternary thingy. :)


// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
// ball1 = new Ball();
// ball2 = new Ball("super");
// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
}

console.log(new Ball().ballType)
// I can't remeber the last time I used classes; definitely had to look up some stuff for this one.