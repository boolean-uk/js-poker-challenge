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

function is3Card(hand) {
  return hand[0] === hand[1] && hand[0] === hand[2]
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

function winning3CardHand(pairs) {
  // keep track of max pair and max 3card as well
  let winningIndex2 = -1
  let maxNum2 = 0
  let winningIndex3 = -1
  let maxNum3 = 0

  for (let i = 0; i < pairs.length; ++i) {
    const item = pairs[i]
    if (item.length === 3) {
      if (is3Card(item)) {
        const num = symbolNumber(item[0])
        if (num > maxNum3) {
          maxNum3 = num
          winningIndex3 = i
        }
      }
    } else {
      if (isPair(item)) {
        const num = symbolNumber(item[0])
        if (num > maxNum2) {
          maxNum2 = num
          winningIndex2 = i
        }
      }
    }
  }

  if (winningIndex3 !== -1) {
    return pairs[winningIndex3]
  }
  if (winningIndex2 !== -1) {
    return pairs[winningIndex2]
  }
  return []
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
