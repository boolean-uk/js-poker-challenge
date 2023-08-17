function winningPair(card1, card2) {
  const rank1 = card1[0];
  const rank2 = card2[0];

  if (rank1 === rank2) {
    return [card1, card2]; // Return both cards as a pair
  } else {
    return []; // No pair
  }
}

function winningPairFromArray(cards) {
  const winningPairs = [];

  for (const [card1, card2] of cards) {
    const pairResult = winningPair(card1, card2);
    if (pairResult.length > 0) {
      winningPairs.push(pairResult); // Push the entire pairResult array
    }
  }

  // Flatten the winningPairs array and return it
  return winningPairs.flat();
}


function winning3CardHand(hands) {
  for (const hand of hands) {
    if (hand.length === 3) {
      const [card1, card2, card3] = hand;
      const ranks = [card1[0], card2[0], card3[0]];
      const uniqueRanks = new Set(ranks);

      if (uniqueRanks.size === 1) {
        return ranks; // Return all three ranks as a three of a kind hand
      }
    }
  }

  return []; // No three of a kind hand
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
