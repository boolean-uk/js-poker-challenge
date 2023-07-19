const rankValues = {
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
  A: 14
}
const isPair = (cards) => cards[0] === cards[1] && cards.length < 3
const isTriplet = (cards) => cards[0] === cards[1] && cards[1] === cards[2]

function winningPair(cards1, cards2) {
  if (isPair(cards1) && isPair(cards2)) {
    if (rankValues[cards1[0]] > rankValues[cards2[0]]) return cards1
    if (rankValues[cards1[0]] < rankValues[cards2[0]]) return cards2
    return []
  }
  if (isPair(cards1)) return cards1
  if (isPair(cards2)) return cards2
  return []
}

function winningPairFromArray(cards) {
  let winningPair = cards[0]
  if (!checkForPairs) return []
  for (const cardPair of cards) {
    if (isPair(cardPair)) {
      if (rankValues[cardPair[0]] > rankValues[winningPair[0]]) {
        winningPair = cardPair
      }
    }
  }
  if (isPair(winningPair)) return winningPair
  return []
}

function winning3CardHand(cards) {
  let winningPair
  if (checkForTriplets(cards)) {
    winningPair = returnFirstTriplet(cards)
    for (const cardstack of cards) {
      if (cardstack.length === 3) {
        if (isTriplet(cardstack)) {
          if (rankValues[cardstack[0]] > rankValues[winningPair[0]]) {
            winningPair = cardstack
          }
        }
      }
    }
    return winningPair
  }
  return winningPairFromArray(cards)
}
function checkConditionForAnyElement(cards, condition) {
  for (const cardstack of cards) {
    if (condition(cardstack)) {
      return true
    }
  }
  return false
}

function checkForPairs(cards) {
  return checkConditionForAnyElement(cards, isPair)
}

function checkForTriplets(cards) {
  return checkConditionForAnyElement(cards, isTriplet)
}

function returnFirstTriplet(cards) {
  for (const cardstack of cards) {
    if (isTriplet(cardstack)) return cardstack
  }
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
