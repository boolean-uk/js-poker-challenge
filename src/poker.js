function isPair(pair) {
  return pair[0] === pair[1]
}

function symbolNumber(symbol) {
  // find numeric representation of symbol
  switch (symbol) {
    case 'J':
      return 11
    case 'Q':
      return 12
    case 'K':
      return 13
    case 'A':
      return 14
    default:
      return parseInt(symbol)
  }
}

function winningPair(pair1, pair2) {
  const isPair1 = isPair(pair1)
  const isPair2 = isPair(pair2)

  if (isPair1 && isPair2) {
    return symbolNumber(pair1[0]) > symbolNumber(pair2[0]) ? pair1 : pair2
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

function winningPairFromArray(pairs) {
  // parse array of pairs, keeping track of current winning pair
  let winningIndex = -1
  let maxNum = 0

  for (let i = 0; i < pairs.length; ++i) {
    const pair = pairs[i]
    if (isPair(pair)) {
      const num = symbolNumber(pair[0])
      if (num > maxNum) {
        maxNum = num
        winningIndex = i
      }
    }
  }

  if (winningIndex === -1) {
    return []
  }

  return pairs[winningIndex]
}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
