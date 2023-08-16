// Let's play! You have to return which player won! In case of a draw return Draw!.
  // Examples(Input1, Input2 --> Output): 
    // "scissors", "paper" --> "Player 1 won!"
    // "scissors", "rock" --> "Player 2 won!"
    // "paper", "paper" --> "Draw!"


const rps = (p1, p2) => {
  if (p1 == p2) {
    return "Draw!"
  }
  if ([p1, p2].includes("scissors") && [p1, p2].includes("paper")) {
    return p1 == "scissors" ? "Player 1 won!" : "Player 2 won!"
  }
  if ([p1, p2].includes("scissors") && [p1, p2].includes("rock")) {
    return p1 == "scissors" ? "Player 2 won!" : "Player 1 won!"
  }
  if ([p1, p2].includes("paper") && [p1, p2].includes("rock")) {
    return p1 == "paper" ? "Player 1 won!" : "Player 2 won!"
  }
};

console.log(rps("scissors", "paper"))
//Oops, totally missed the opportunity to make this a lot shorter by creating if/else statements for all the Player 1 wins, then an else that states that Player 2 wins


// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce(
    (accumulator, currentValue) => accumulator + currentValue)
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
//Turns out the initialValue can be left off if you want it to start at 0 - hooray!