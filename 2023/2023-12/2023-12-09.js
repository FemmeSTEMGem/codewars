// Ahoy matey!
// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!
// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?
// You begin with writing a generic Ship class / struct:
// class Ship {
//   constructor(draft, crew) {
//     this.draft = draft
//     this.crew = crew
//   }
// }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
//     draft - an estimate of the ship's weight based on how low it is in the water
//     crew - the count of crew on board
// const titanic = new Ship(15, 10);
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.
// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!
// Add the method
// isWorthIt
// to decide if the ship is worthy to loot. For example:
// titanic.isWorthIt() // return false
// Good luck and may you find GOOOLD!

class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt(draft, crew) {
    return (this.crew * 1.5) - this.draft > 20
  }  
}
// This was actually a really nice exercise to do because I hadn't set up a new class in a while; let alone one with a method in it. I did pretty well, just needed a refresher on some of the syntax.


// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

const solve = (x, y) => x / y
// This is too easy for a 8kyu kata, lol