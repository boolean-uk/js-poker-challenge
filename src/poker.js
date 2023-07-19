const convertValues = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}
const convertArray = (hand) =>
  hand.map((card) => Number(convertValues[card] || card))
  
function isPair (hand){
  return hand[0]===hand[1]
}

function winningPair(hand1, hand2) {
  const hand1Converted = convertArray(hand1)
  const hand2Converted = convertArray(hand2)
  //Both hands have pair
  if (isPair(hand1)&&isPair(hand2)){
      return hand1Converted > hand2Converted ? hand1 : hand2 
  }
  //Hand 1 has pair
  if (isPair(hand1)&&!isPair(hand2)){
    return hand1
  }
  //Hand 2 has pair
  if (isPair(hand2)&&!isPair(hand1)){
    return hand2
  }
  else return []
}

// Extension criteria

function winningPairFromArray(array) {
  let win = []
  for (let i = 0; i < array.length; i++) {
    win = winningPair(array[i], win)
  }
  return win
}


function winning3CardHand(array) {
  const doubles = locateDoubles(array)
  const triples = locateTriples(array)

  if (triples.length === 0 && doubles.length === 0) return []

  let winningNumber = 0
  let winningCards

  const findWinningCards = (cards) => {
    const cardsNum = convertArray(cards)

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

const locateDoubles = (array) => array.filter((cards) => cards[0] === cards[1] && cards.length === 2)

const locateTriples = (array) => array.filter((cards) => cards[0] === cards[1] && cards[0] === cards[2])


module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
