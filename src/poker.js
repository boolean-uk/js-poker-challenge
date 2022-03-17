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

class Poker {
  // Write your implementation here
  constructor (card) {
    this.card = card
    // this.card2 = card2
    this.cardDeckPoints = {
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
  }

  winningPair (card1, card2) {
    if (((card1[0] === card1[1]) === false) && ((card2[0] === card2[1]) === false)) {
      return []
    } else if (((card1[0] === card1[1]) === true) && ((card2[0] === card2[1]) === false)) {
      return card1
    } else if (((card1[0] === card1[1]) === false) && ((card2[0] === card2[1]) === true)) {
      return card2
    } else if (
      this.cardDeckPoints[card1[0]] + this.cardDeckPoints[card1[0]] >
      this.cardDeckPoints[card2[0]] + this.cardDeckPoints[card2[0]]
    ) {
      return card1
    } else {
      return card2
    }
  }
}

module.exports = Poker
