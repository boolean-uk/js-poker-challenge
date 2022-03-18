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
    let handOneIsPair = false;
    if (handOne[0] === handOne[1]) {
      handOneIsPair = true;
    }

    let handTwoIsPair = false;
    if (handTwo[0] === handTwo[1]) {
      handTwoIsPair = true;
    }

    if (handOneIsPair === false && handTwoIsPair === false) {
      return [];
    }

    if (handOneIsPair === false && handTwoIsPair === true) {
      return handTwo;
    }

    if (handOneIsPair === true && handTwoIsPair === false) {
      return handOne;
    }
    if (
      cards[handOne[0]] + cards[handOne[1]] >
      cards[handTwo[0]] + cards[handTwo[1]]
    ) {
      return handOne;
    }
  }
}
module.exports = Poker;
