const cardMapping  = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}

function winningPair(card1, card2) {
  const card1Number = mapCardsToValues(card1)
  const card2Number = mapCardsToValues(card2)

  if (!hasPair(card1Number) && !hasPair(card2Number)) 
    return []

  if (hasPair(card1Number) && hasPair(card2Number)) {
    return card1Number[0] > card2Number[0] ? card1 : card2
  } else if (hasPair(card1Number)) {
    return card1
  } else {
    return card2
  }
}

function winningPairFromArray(array) {
  const doublesArr = locateDoubles(array)

  if (doublesArr.length === 0) 
    return []

  let winningNumber = 0
  let winningCards

  for (const cards of doublesArr) {
    const cardsNum = mapCardsToValues(cards)

    if (winningNumber < cardsNum[0]) {
      winningNumber = cardsNum[0]
      winningCards = cards
    }
  }
  return winningCards
}

function winning3CardHand(array) {
  const doubles = locateDoubles(array)
  const triples = locateTriples(array)

  if (triples.length === 0 && doubles.length === 0) 
    return []

  let winningNumber = 0
  let winningCards

  const findWinningCards = (cards) => {
    const cardsNum = mapCardsToValues(cards)

    if (winningNumber < cardsNum[0]) {
      winningNumber = cardsNum[0]
      winningCards = cards
    }
  }

  triples.forEach(findWinningCards)
  if (winningNumber === 0) 
    doubles.forEach(findWinningCards)

  return winningCards
}

const hasPair = (cards) => cards[0] === cards[1]

const locateDoubles = (array) => array.filter((cards) => cards[0] === cards[1] && cards.length === 2)

const locateTriples = (array) => array.filter((cards) => cards[0] === cards[1] && cards[0] === cards[2])

const mapCardsToValues = (cards) => cards.map((card) => Number(cardMapping [card] || card))

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}