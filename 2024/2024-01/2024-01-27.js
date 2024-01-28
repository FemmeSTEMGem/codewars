// Ahoy Matey!
// Welcome to the seven seas.
// You are the captain of a pirate ship.
// You are in battle against the royal navy.
// You have cannons at the ready.... or are they?

// Your task is to check if the gunners are loaded and ready, if they are: Fire!
// If they aren't ready: Shiver me timbers!
// Your gunners for each test case are 2, 3 or 4.
// When you check if they are ready their answers are in a dictionary and will either be: aye or nay
// Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
// If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!

let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};

const cannonsReady = (gunners) => {
  for (let i in gunners) {
    if (gunners[i] == "nay") {
      return "Shiver me timbers!"
    }
  }
  return "Fire!"
}

console.log(cannonsReady(b))
//  I knew there was a better way to solve this, I just knew that it would involve mucking about in objects and I didn't have the brain for it after a long day at work at the end of the week. Here's my favourite solution from CodeWars, though:
// const cannonsReady = (gunners) => {
//   return Object.values(gunners).includes('nay')?'Shiver me timbers!':'Fire!';
// }