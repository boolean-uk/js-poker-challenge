const values = {
  0: 0,
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

function winningPair(firstPair, secondPair) {
  if (
    values[firstPair[0]] === values[firstPair[1]] &&
    values[secondPair[0]] !== values[secondPair[1]]
  )
    return firstPair
  else if (
    values[firstPair[0]] !== values[firstPair[1]] &&
    values[secondPair[0]] === values[secondPair[1]]
  )
    return secondPair
  else if (
    values[firstPair[0]] === values[firstPair[1]] &&
    values[secondPair[0]] === values[secondPair[1]]
  )
    return values[firstPair[0]] > values[secondPair[0]] ? firstPair : secondPair
  else return []
}

// Extension criteria

function winningPairFromArray(array) {
  let winning = [0, 0]
  for (const pair of array) {
    if (
      values[pair[0]] === values[pair[1]] &&
      values[pair[0]] > values[winning[0]]
    )
      winning = pair
  }
  return values[winning[0]] === 0 ? [] : winning
}

const calculateHand = (hand) => {
  const count = {}
  for (const card of hand) {
    count[card] = (count[card] || 0) + 1
  }
  const three = Object.keys(count).find((card) => count[card] === 3)
  if (three) return 100 + values[three]

  const pair = Object.keys(count).find((card) => count[card] === 2)
  if (pair) return values[pair]

  return 0
}

function winning3CardHand(arrayOfHands) {
  let winning = [0, 0]
  for (const hand of arrayOfHands) {
    if (calculateHand(hand) > calculateHand(winning)) winning = hand
  }
  return values[winning[0]] === 0 ? [] : winning
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
