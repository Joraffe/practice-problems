/*

Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures?

*/

// Time/Space Complexity of this solution:
// O(N^2) Time, O(1) space
var isUnique = function isUnique(str) {
  for (var i = 0; i < str.length; i++) {
    var sub = str.slice(0, i);
    var cur = str[i];
    if (sub.indexOf(cur) !== -1) {
      return false;
    }
  }
  return true;
};

console.log(isUnique('tacocat'))
console.log(isUnique('taco'))


/*
-------------------
Notes:
-------------------

- No data structures means no arrays or objects to "keep track"
of the unique characters

- Probably need to use some form of a boolean flag (initially true)

- If a character is encountered more than once, set the boolean flag
to false

Some simple examples:
  - 'tacocat' --> false
  - 'taco' --> true

What is the time complexities involved?
- It can't be better than O(N) because you need to check
each character at least once

Clarification questions:
- What counts as "additional data structures"
  --> Can I make another string?

I envision that I'll need to iterate through the whole string
and then for each character, examine the previous substring
if the current character is in the previous substring

*/
