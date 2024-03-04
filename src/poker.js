function cardValue(card) {
  const cardValues = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
    '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
  };
  return cardValues[card];
}

function winningPair(hand1, hand2) {
  const hand1Value = Math.max(cardValue(hand1[0]), cardValue(hand1[1]));
  const hand2Value = Math.max(cardValue(hand2[0]), cardValue(hand2[1]));

  // Check if either hand is a pair
  const hand1IsPair = hand1[0] === hand1[1];
  const hand2IsPair = hand2[0] === hand2[1];

  if (hand1IsPair && !hand2IsPair) {
    return hand1;
  } else if (hand2IsPair && !hand1IsPair) {
    return hand2;
  } else if (hand1IsPair && hand2IsPair) {
    // If both are pairs, the higher pair wins
    return hand1Value > hand2Value ? hand1 : hand2;
  }
  // If neither hand is a pair, return an empty array
  return [];
}

function winningPairFromArray(handsArray) {
  let winningHand = [];
  let highestValue = 0;
  for (const hand of handsArray) {
    const handValue = hand[0] === hand[1] ? cardValue(hand[0]) * 2 : 0; // Only consider pairs
    if (handValue > highestValue) {
      highestValue = handValue;
      winningHand = hand;
    }
  }
  return winningHand;
}

function winning3CardHand(handsArray) {
  let winningHand = [];
  let highestValue = 0;
  let bestHandType = 0; // 1 for single or pair, 3 for three of a kind

  for (const hand of handsArray) {
    const handType = (hand.length === 3 && new Set(hand).size === 1) ? 3 : (hand[0] === hand[1]) ? 2 : 1;
    let handValue = 0;

    if (handType === 3) { // Three of a kind
      handValue = cardValue(hand[0]) * 3;
    } else if (handType === 2) { // Pair
      handValue = cardValue(hand[0]) * 2;
    } else { // High card
      handValue = Math.max(...hand.map(cardValue));
    }

    // Check if the current hand is better than the currently winning hand
    if (handType > bestHandType || (handType === bestHandType && handValue > highestValue)) {
      winningHand = hand;
      highestValue = handValue;
      bestHandType = handType;
    }
  }

  return winningHand;
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
};
