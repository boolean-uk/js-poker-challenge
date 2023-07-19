const lookupTable = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}

const isPair = (cards) => cards[0] === cards[1]

const findDouble = (array) =>
  array.filter((cards) => cards[0] === cards[1] && cards.length === 2)

const findTriple = (array) =>
  array.filter((cards) => cards[0] === cards[1] && cards[0] === cards[2])

const convertArray = (cards) =>
  cards.map((card) => Number(lookupTable[card] || card))

function winningPair(cards1, cards2) {
  const cards1Num = convertArray(cards1)
  const cards2Num = convertArray(cards2)

  if (!isPair(cards1Num) && !isPair(cards2Num)) return []

  if (isPair(cards1Num) && isPair(cards2Num)) {
    return cards1Num[0] > cards2Num[0] ? cards1 : cards2
  } else if (isPair(cards1Num)) {
    return cards1
  } else {
    return cards2
  }
}

function winningPairFromArray(array) {
  const doublesArr = findDouble(array)

  if (doublesArr.length === 0) return []

  let winnerNumber = 0
  let winnerCards

  for (const cards of doublesArr) {
    const cardsNum = convertArray(cards)

    if (winnerNumber < cardsNum[0]) {
      winnerNumber = cardsNum[0]
      winnerCards = cards
    }
  }

  return winnerCards
}

function winning3CardHand(array) {
  const triples = findTriple(array)
  const doubles = findDouble(array)

  if (triples.length === 0 && doubles.length === 0) return []

  let winnerNumber = 0
  let winnerCards

  const findWinnerCards = (cards) => {
    const cardsNum = convertArray(cards)

    if (winnerNumber < cardsNum[0]) {
      winnerNumber = cardsNum[0]
      winnerCards = cards
    }
  }

  triples.forEach(findWinnerCards)
  if (winnerNumber === 0) doubles.forEach(findWinnerCards)

  return winnerCards
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
