class listNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

/*3 rules for recursion
must be a base case - condition you must get to to break out of recursive function
change its state repeatedly to move forward to base case
call itself*/

// function search(head, value) {
//   let current = head
//   while (current !== null) {
//     if (current.value === value) {
//       return true
//     }
//     current = current.next
//   }
//   return false
// }


// 3 -> 6-> 9
function search(head, value){
current = head; 
if (current===null) {
  return false
} if (current.value === value) {
  return true
}
return search(current.next, value)
}


search(3, 0)
// if (current !== null) {
//   if (current.value === value) {
//     return true;
//   }
//  return search(current.next, value)
// } else return false
// }

// This function searches a linked list built from the provided listNode class, returning True if an element is found in the linked list. It returns False otherwise.

// Convert it to a recursive solution, i.e., the search function must call itself instead of using a loop.

// Hint: what is the base case?

// Test cases:
const head = new listNode(3)
head.next = new listNode(6)
head.next.next = new listNode(9)
// The linked list is 3 -> 6 -> 9 (3 is the head of the list)

console.log(search(head, 3)) // true
console.log(search(head, 0)) // false
console.log(search(head, 9)) // true
