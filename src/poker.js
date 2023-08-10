function returnCardValue(cardArr) {
  const values = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ]
  return values.indexOf(cardArr[0])
}

function isPair(cardArr) {
  return cardArr[0] === cardArr[1]
}

function isThreeOfKind(cardArr) {
  if (cardArr[0] === cardArr[1] && cardArr[1] === cardArr[2]) {
    return true
  } else {
    return false
  }
}

function cardsInHand(cardArr) {
  return cardArr.length
}

function decideWinner(cardPair1, cardPair2) {
  if (returnCardValue(cardPair1) > returnCardValue(cardPair2)) {
    return cardPair1
  } else if (returnCardValue(cardPair1) < returnCardValue(cardPair2)) {
    return cardPair2
  } else {
    return []
  }
}

function winningPair(pair1, pair2) {
  if (isPair(pair1) && isPair(pair2) === false) {
    return pair1
  } else if (isPair(pair2) && isPair(pair1) === false) {
    return pair2
  } else if (isPair(pair1) && isPair(pair2)) {
    return decideWinner(pair1, pair2)
  } else {
    return []
  }
}

// Extension criteria

function winningPairFromArray(pairList) {
  let pairWon = pairList[0]
  for (let i = 1; i < pairList.length; i++) {
    pairWon = winningPair(pairWon, pairList[i])
  }
  return pairWon
}

function winning3CardHand(pairList) {
  let pairWon = pairList[0]
  for (let i = 1; i < pairList.length; i++) {
    if (
      cardsInHand(pairWon) === cardsInHand(pairList[i]) &&
      cardsInHand(pairList[i]) === 2
    ) {
      pairWon = winningPair(pairWon, pairList[i])
    } else if (
      cardsInHand(pairWon) === cardsInHand(pairList[i]) &&
      cardsInHand(pairList[i]) === 3
    ) {
      if (isThreeOfKind(pairList[i]) && isThreeOfKind(pairWon) === false) {
        pairWon = pairList[i]
      } else if (isThreeOfKind(pairWon) && isThreeOfKind(pairList[i])) {
        pairWon = decideWinner(pairWon, pairList[i])
      }
    } else if (cardsInHand(pairWon) === 2 && cardsInHand(pairList[i] === 3)) {
      if (isPair(pairWon) && isThreeOfKind(pairList[i])) {
        pairWon = pairList[i]
      }
    } else if (cardsInHand(pairWon) === 3 && cardsInHand(pairList[i] === 2)) {
      if (isThreeOfKind(pairWon) === false && isPair(pairList[i])) {
        pairWon = pairList[i]
      }
    }
  }
  if (isPair(pairWon) === false && isThreeOfKind(pairWon) === false) {
    pairWon = []
  }
  return pairWon
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
