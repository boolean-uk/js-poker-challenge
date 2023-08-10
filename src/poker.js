function winningPair(pair1, pair2) {
  const isPair1 = pair1[0] === pair1[1]
  const isPair2 = pair2[0] === pair2[1]

  if (isPair1 && isPair2) {
    return pair1[0] > pair2[0] ? pair1 : pair2
  }
  if (isPair1) {
    return pair1
  }
  if (isPair2) {
    return pair2
  }
  return []
}

// Extension criteria

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
