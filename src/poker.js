//inp 2 arrays of 2 strings
//out one array of 2 strings or empty array

// check if array exists
// check if array has for time being 2 arguments of arrays
// check if its a valid card
//if true
// check both sets for a match
// if no match for eother return []
// if match for one, return the matched one
// if both match which has a highest card value
// crad values need to be index with an integer value

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
  winningPair(hand1, hand2) {
    const [card1, card2] = hand1;
    const [card3, card4] = hand2;

    if (card1 !== card2 && card3 !== card4) return [];

    if (card1 === card2 && card3 === card4) {
      if (cardPointMap[card1] > cardPointMap[card3]) return hand1;
      if (cardPointMap[card1] < cardPointMap[card3]) return hand2;
    }

    if (card1 === card2 || card3 === card4) {
      if (card1 === card2) return hand1;
      if (card3 === card4) return hand2;
    }
  }
}

// --------------------------- testing -----------------------------

// function winningPair(hand1, hand2) {
//   const [card1, card2] = hand1;
//   const [card3, card4] = hand2;

//   if (card1 !== card2 && card3 !== card4) return console.log([]);

//   if (card1 === card2 && card3 === card4) {
//     if (cardPointMap[card1] > cardPointMap[card3]) return console.log(hand1);
//     if (cardPointMap[card1] < cardPointMap[card3]) return console.log(hand2);
//   }
// }

// winningPair(["J", "J"], ["A", "A"]);
module.exports = Poker;
