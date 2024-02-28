const { cardValues } = require('./winning-hands.js')

function winningPair(hand1, hand2) {
  const handArr = [hand1, hand2]
  return winnerCheck(handArr)
}

// Extension criteria

function winningPairFromArray(handArr) {
  return winnerCheck(handArr)
}

function winning3CardHand(handArr) {
  return winnerCheck(handArr)
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}

function winnerCheck(handArr) {
  const topHand = {
    value: 0,
    cards: []
  }
  for (let i = 0; i < handArr.length; i++) {
    const card1 = handArr[i][0]
    const card2 = handArr[i][1]
    const card3 = handArr[i][2]
    const handValue = matchCheck(card1, card2, card3)
    if (handValue > topHand.value) {
      topHand.cards = handArr[i]
      topHand.value = handValue
    }
  }
  return topHand.cards
}

function matchCheck(card1, card2, card3) {
  let handValue = 0

  if (card3 === undefined) {
    card3 = 0
  }

  if (card1 === card2 && card2 === card3) {
    handValue = cardValues[card1] + cardValues[card2] + cardValues[card3] + 100
  } else if (card1 === card2) {
    handValue = cardValues[card1] + cardValues[card2]
  } else if (card2 === card3) {
    handValue = cardValues[card2] + cardValues[card3]
  } else if (card1 === card3) {
    handValue = cardValues[card2] + cardValues[card3]
  }
  return handValue
}
