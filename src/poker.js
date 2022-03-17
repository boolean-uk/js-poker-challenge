// Input: 2 arrays of strings, each with 2 items.
//Output: 1 array.

// Check if both items in an array are the same
// If they are, it's a pair.
// If not, it's not a pair.
// If neither of the arrays has a pair, return []
// If one of the arrays has a pair, return that pair

// If both of the arrays have pairs, figure out which pair scores higher
// Check every card in one of the arrays against some kind of point value
// ['J', 'Q'] -> look at 'J', {'J': 11}, look at 'Q', {'Q': 12}
// Do that for both arrays, compare the total score
// Then return the array with the highest score.

const cards = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

class Poker {
  winningPair(handOne, handTwo) {
    // Check if both items in an array are the same
    // handOne = ["A", "A"]
    // handOne [0] === handOne [1]
    // This is checking if the fst card equal the 2nd card.
    let handOneIsPair = false; // We don't know if handOne has two cards that are identical.
    if (handOne[0] === handOne[1]) {
      // check if first card is equal to second card in handOne
      // if first card equals 2nd card
      handOneIsPair = true;
    }

    let handTwoIsPair = false; // We don't know if handOne has two cards that are identical.
    if (handTwo[0] === handTwo[1]) {
      // check if first card is equal to second card in handOne
      // if first card equals 2nd card
      handTwoIsPair = true;
    }

    if (handOneIsPair === false && handTwoIsPair === false) {
      // If handOne is NOT a pair AND handTwo is NOT a pair, return [].
      return [];
    }

    // If they are, it's a pair.
    // If not, it's not a pair.
  }
}

module.exports = Poker;
