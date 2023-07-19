const cardNumbers = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}

function pairCheck(pair) {
  return pair[0] === pair[1]
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

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
