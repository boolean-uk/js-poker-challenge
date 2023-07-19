const cardPair  = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}

const getCardValue = (card) => {
  if (isNaN(card)) {
    return cardPair[card] || card;
  }
  return card;
};

const isHigher = (cards1, cards2) => {
  const cardValue1 = parseInt(getCardValue(cards1[0]), 10);
  const cardValue2 = parseInt(getCardValue(cards2[0]), 10);
  return cardValue1 > cardValue2 ? cards1 : cards2;
};

function winningPair(pair1, pair2) {
  if (OneIsPair(pair1) && OneIsPair(pair2)) {
    return isHigher(pair1, pair2);
  } else if (OneIsPair(pair1)) {
    return pair1;
  } else if (OneIsPair(pair2)) {
    return pair2;
  } else {
    return [];
  }
}

function OneIsPair(cards) {
  return cards[0] === cards[1];
}

// Extension criteria

function winningPairFromArray(cards) {
  let pairs = cards.filter(pair => OneIsPair(pair))
  if (pairs.length === 0) return []
  let currentWinningPair = pairs[0]
  
  for (let i = 1; i < pairs.length; i++) {
    currentWinningPair = winningPair(currentWinningPair, pairs[i])
  }
  
  return currentWinningPair
}

function areThreeCardsIdentical(cards) {
  let result = cards[0] === cards[1] && cards[1] === cards[2]
  return result
}

const isHigherTriple = (cards1, cards2, cards3) => {
  const cardValue1 = parseInt(getCardValue(cards1[0]), 10)
  const cardValue2 = parseInt(getCardValue(cards2[0]), 10)
  const cardValue3 = parseInt(getCardValue(cards3[0]), 10)
  let higherCardValue =  cardValue1 > cardValue2 ? cards1 : cards2
  return higherCardValue > cardValue3 ? higherCardValue : cardValue3
};

function winningTriple(triple1, triple2, triple3) {
  if (areThreeCardsIdentical(triple1) && areThreeCardsIdentical(triple2)) {
    return isHigherTriple(triple1, triple2, triple3)
  } else if (OneIsPair(triple1)) {
    return triple1
  } else if (OneIsPair(triple2)) {
    return triple2
  } else if (OneIsPair(triple3)) {
    return triple3
  } else {
    return [];
  }
}

function winning3CardHand(cards) {
  let identicalTriples = cards.filter(cards => {
    if (cards.length === 3) {
      return areThreeCardsIdentical(cards)
    }
    return false
  })
  if (identicalTriples.length === 0) {
    return winningPairFromArray(cards.filter(cards => cards.length === 2))
  }
  let currentWinningTriple = identicalTriples[0]

  for (let i = 1; i < identicalTriples.length; i++) {
    currentWinningTriple = winningTriple(currentWinningTriple, identicalTriples[i])
  }

  return currentWinningTriple
}



module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
