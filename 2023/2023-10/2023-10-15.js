// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
// Add the value "codewars" to the array websites 1,000 times.

var websites = new Array(1000).fill("codewars");

// console.log(websites)
// This one took an embarassingly long time to do because I wore a groove in my brain trying to make .repeat() work. Obviously, I didn't want to insert "codewars" into the array 1,000 times because that's not efficient at all. The above is much tidier and more performant.


// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).
//! You can not use multiplier "*" operator.
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

function billboard(name, price = 30){
  let cost = 0
  for (let i = 0; i < name.length; i++) {
    cost += price
  }
  return cost
}

console.log(billboard("Abishai Charalampos")) // 570
// This is pretty convoluted, but without the ability to use the * operator, I guess that's kinda par for the course. This solution was marked as best practices but I personally liked this one a lot:
  // function billboard(name, price = 30){
  // return name.repeat(price).length;
  // }
// I had been trying to come up with a solution that used .repeat(), but the solution didn't appear quickly enough, so I abandoned it thinking I was trying to be too clever. I'm not sure what's wrong with this solution that I like; a lot of people marked it "clever" rather than "best practices" and I'm not sure why.