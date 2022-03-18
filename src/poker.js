const cardPointMap = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  10: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
  1: 1,
};

class Poker {
  /** ----------------------------------------------------------------------------------------------------------
   * determines the winning hand whether its a nested array of pairs or triples (tackles extension 1 + extension2)
   * @param {array} arr takes in an array of hands (arrays with either 2 or 3 indexes (cards))
   * @returns single array (hand)
   */
  winningHand(cardHandArray) {
    let currentWinningScorePair = 0;
    let currentWinningHandPair;
    let currentWinningScoreTrio = 0;
    let currentWinningHandTrio;

    let trioIsPresent = false;

    cardHandArray.forEach((hand) => {
      const handIsPair = this.isPair(hand);
      const handIsTrio = this.isTrio(hand);
      const handCardValue = this.cardValue(hand);

      if (!handIsPair) return;

      if (handIsTrio && handCardValue > currentWinningScoreTrio) {
        currentWinningScoreTrio = handCardValue;
        currentWinningHandTrio = hand;
        trioIsPresent = true;
      }

      if (!trioIsPresent)
        if (handIsPair && handCardValue > currentWinningScorePair) {
          currentWinningScorePair = handCardValue;
          currentWinningHandPair = hand;
        }
    });

    if (currentWinningScorePair === 0) return [];

    if (currentWinningScorePair > 0 && currentWinningScoreTrio > 0)
      return currentWinningHandTrio;

    if (currentWinningScorePair > 0 && currentWinningScoreTrio === 0)
      return currentWinningHandPair;
  }
  // -----------------------------------------------------------------------------------------------------------

  /** ----------------------------------------------------------------------------------------------------------
   * checks if the card hand (a single array with 2 strings denoting 'cards') is a pair or not
   * @param {array} arr takes in a card hand array
   * @returns boolean
   */
  isPair(arr) {
    const [card1, card2] = arr;

    return card1 === card2;
  }
  // -------------------------------------------------------------------------------------------------------------

  /** ------------------------------------------------------------------------------------------------------------
   * checks if the card hand (a single array with 3 strings denoting 'cards') is a trio or not
   * @param {array} arr takes in a card hand array
   * @returns boolean
   */
  isTrio(arr) {
    const [card1, card2, card3] = arr;

    return card1 === card2 && card2 === card3;
  }
  //  ------------------------------------------------------------------------------------------------------------

  /** ------------------------------------------------------------------------------------------------------------
   * returns the card value as an integer for the card hand array passed into it (ONLY USED WHEN YOU KNOW IT'S A PAIR)
   * @param {array} arr takes in a card hand
   * @returns integer
   */
  cardValue(arr) {
    const [card1, card2] = arr;

    if (card1 === card2) return cardPointMap[card1];

    return false;
  }
  // ------------------------------------------------------------------------------------------------------------
}

// winningPair(hand1, hand2) {
//   const handOneIsPair = this.isPair(hand1);
//   const handTwoIsPair = this.isPair(hand2);
//   const handOneCardValue = this.cardValue(hand1);
//   const handTwoCardValue = this.cardValue(hand2);

//   if (!handOneIsPair && !handTwoIsPair) return [];

//   if (handOneIsPair && handTwoIsPair) {
//     if (handOneCardValue > handTwoCardValue) return hand1;
//     if (handOneCardValue < handTwoCardValue) return hand2;
//   }

//   if (handOneIsPair || handTwoIsPair) {
//     if (handOneIsPair) return hand1;
//     if (handTwoIsPair) return hand2;
//   }
// }

module.exports = Poker;
