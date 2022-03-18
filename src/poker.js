// input : 2 arrays of strings, each with 2 items
// Output: One array

// Check if both items in an array are the same/
// if they are its a pair
// if not its not  a pair
// if neither of the arrays have pairs , return []
// if one of the arrays had a pair , return that pair

// if both of the arrays have pairs, figutre out which pair scores higher
// Check every card in an array against some kind of point value
// Do that for both arrays compare the total score then return the array with the highest score

class Poker {
  checkForPair (hand) { return hand[0] === hand[1] || hand[0] === hand[2] || hand[1] === hand[2] }

  winningPair (handOne, handTwo) {
    if (handOne[0] !== handOne[1] && handTwo[0] !== handTwo[1]) {
      return []
    } else if (handOne[0] === handOne[1] && handTwo[0] !== handTwo[1]) {
      return handOne
    } else if (handOne[0] !== handOne[1] && handTwo[0] === handTwo[1]) {
      return handTwo
    } else {
      if (handOne[0] > handTwo[0]) {
        return handOne
      } else {
        return handTwo
      }
    }
  }
}

// Write your implementation here
module.exports = Poker
