function winningPair(handOne, handTwo) {
  if (isPair(handOne)) {
    if (isPair(handTwo)) {
      if (handOne[0] === handTwo[0]) {
        return []
      } else {
        return handOne[0] > handTwo[0] ? handOne : handTwo
      }
    }
    return handOne
  } else if (isPair(handTwo)) {
    return handTwo
  }
  return []
}
function isPair(hand) {
  return hand[0] === hand[1]
}
function isThreeOfAKind(hand) {
  return hand[0] === hand[1] && hand[1] === hand[2]
}
// Extension criteria
function compareCards(card1, card2) {
  const cardValues = [
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
  return cardValues.indexOf(card1) - cardValues.indexOf(card2)
}
function winningPairFromArray(arrayOfHands) {
  let winningPair = [0, 0]
  let foundPair = false
  for (const hand of arrayOfHands) {
    if (isPair(hand)) {
      foundPair = true
      if (compareCards(hand[0], winningPair[0]) > 0) {
        winningPair = hand
      }
    }
  }
  if (foundPair) {
    return winningPair
  } else {
    return []
  }
}

function winning3CardHand(arrayOfHands) {
  let winningPair = [0, 0]
  let foundPair = false
  let foundThreeOfaKind = false
  for (const hand of arrayOfHands) {
    if (isThreeOfAKind(hand)) {
      foundThreeOfaKind = true
      if (
        winningPair.length === 2 ||
        compareCards(hand[0], winningPair[0]) > 0
      ) {
        winningPair = hand
      }
      // if (compareCards(hand[0], winningPair[0]) > 0) {
      //   winningPair = hand
      // }
    } else if (isPair(hand)) {
      if (foundThreeOfaKind) {
        continue
      }
      foundPair = true
      if (compareCards(hand[0], winningPair[0]) > 0) {
        winningPair = hand
      }
    }
  }
  if (foundPair || foundThreeOfaKind) {
    return winningPair
  } else {
    return []
  }
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
