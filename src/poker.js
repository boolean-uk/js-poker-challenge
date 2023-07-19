const cardPair  = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}

const OneIsPair = (cards) => cards[0] === cards[1]
const isHigher = (cards1, cards2) => cards1[0] > cards2[0] ? cards1 : cards2

function winningPair(pair1, pair2) {
  let result 
  if (OneIsPair(pair1)) result = pair1
  if (OneIsPair(pair2)) result = pair2 
  return !OneIsPair(pair1) && !OneIsPair(pair2) ? [] : 
    OneIsPair(pair1) && OneIsPair(pair2) ? isHigher(pair1, pair2) :
      result
}

// Extension criteria

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
