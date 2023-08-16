// In this kata you will create a function that takes in a list and returns a list with the reverse order.
// Examples (Input -> Output)

// * [1, 2, 3, 4]  -> [4, 3, 2, 1]
// * [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
  return list.reverse()
}

console.log(reverseList([1, 2, 3, 4]))
// Simple enough that I'm wondering why it's being included as a kata at all >_>


// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a = "code";
var b = "wa.rs";
var name = a + b;
// It needs to be a single "=", not two "=="
// Again, I'm worried that this is too simple for this level of kata.