// Input: 2 strings, each with 2 items
// Output: One array

// Check if both items in an array are the same
// If they are, it's a pair
// If not, it's not a pair
// If neither of the arrays have pairs, return that pair, return []

// If both of the arrays have pairs, figure out which pair scores higher
// Check every card in one of the arrays against some kind of point value
// ['J', 'Q'] -> look at 'J', { 'J': 11 } , look at 'Q', { 'Q': 12 }
// Do that for both arrays, compare the total score
// Then return the array with the highest score
const cardDeckPoints = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

class Poker {
  // Write your implementation here
  // constructor () {
  //   this.cardDeckPoints = {
  //     1: 1,
  //     2: 2,
  //     3: 3,
  //     4: 4,
  //     5: 5,
  //     6: 6,
  //     7: 7,
  //     9: 9,
  //     10: 10,
  //     J: 11,
  //     Q: 12,
  //     K: 13,
  //     A: 14
  //   }
  // }

  isPair (hand) {
    return hand[0] === hand[1]
  }

  winningPair (hand1, hand2) {
    if (!this.isPair(hand1) && !this.isPair(hand2)) {
      return []
    } else if (this.isPair(hand1) && !this.isPair(hand2)) {
      return hand1
    } else if (!this.isPair(hand1) && this.isPair(hand2)) {
      return hand2
    } else if (
      cardDeckPoints[hand1[0]] + cardDeckPoints[hand1[0]] >
      cardDeckPoints[hand2[0]] + cardDeckPoints[hand2[0]]
    ) {
      return hand1
    } else {
      return hand2
    }
  }
}

module.exports = Poker
