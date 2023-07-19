const cardNumbers = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}

function pairCheck(pair) {
  return pair[0] === pair[1]
}

function setCheck(hand) {
  return hand.length === 3 && hand[0] === hand[1] && hand[1] === hand[2]
}

const checkNumber = (pairs) =>
  pairs.map((pair) => Number(cardNumbers[pair] || pair))

function winningPair(pair1, pair2) {
  if (!pairCheck(pair1) && !pairCheck(pair2)) return []
  else if (pairCheck(pair1) && pairCheck(pair2)) {
    const pair1Num = checkNumber(pair1)
    const pair2Num = checkNumber(pair2)
    return pair1Num[0] > pair2Num[0] ? pair1 : pair2
  } else if (!pairCheck(pair1)) return pair2
  else return pair1
}

// Extension criteria

function winningPairFromArray(pairs) {
  pairs = pairs.filter(pairCheck)

  let bestPair

  for (const pair of pairs) {
    if (bestPair == null) {
      bestPair = pair
      continue
    }

    if (checkNumber(pair)[0] > checkNumber(bestPair)[0]) {
      bestPair = pair
    }
  }
  return bestPair ?? []
}

function winning3CardHand(hands) {
  const setHands = hands.filter(setCheck)
  if (setHands.length === 0) return winningPairFromArray(hands)

  let bestSet

  for (const setHand of setHands) {
    if (bestSet == null) {
      bestSet = setHand
      continue
    }

    if (checkNumber(setHand)[0] > checkNumber(bestSet)[0]) {
      bestSet = setHand
    }
  }
  return bestSet ?? []
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
