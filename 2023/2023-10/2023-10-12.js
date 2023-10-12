// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

function whoIsPaying(name){
  return name.length <= 2 ? [name] : [name, name.slice(0, 2)]
}

console.log(whoIsPaying(""))
// Looks like my solution is the most efficient. Woohoo!


// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
// Can you figure out what's wrong here?

function swapValues(args) {
  var temp = args[0]; //1
  args[0] = args[1]; //2
  args[1] = temp; //1
  return args
}

console.log(swapValues([1, 2]))
// This was a really frustrating one because I don't know why you would ever ask for an argument this way:
  // var args = Array.prototype.slice.call(arguments)
// In retrospect, arr.reverse() would have been the simplest, but that unecessary line from before had me thinking way too far beyond the simple answer. I was wracking my brain trying to think this kata was more clever/difficult than it was. Is there seriously a reason for declaring arguments this way?
// I used ChatGPT to look this up. Apparently, with older JavaScript code, it was much more common to interact with the arguments object directly. This is pre-2009 stuff. So, while the modern conventions that I learned are better, I'm actually pretty okay with stumbling across this since legacy code is a thing that I could come across.