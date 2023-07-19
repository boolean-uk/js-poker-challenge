const arr = {A: 14, K: 13, Q: 12, J: 11}

function winningPair(pair1, pair2) {
  const ifPair1IsPair = pair1[0] === pair1[1]
  const ifPair2IsPair = pair2[0] === pair2[1]
  if(ifPair1IsPair  && !ifPair2IsPair) return pair1
  else if(!ifPair1IsPair  && ifPair2IsPair) return pair2
  else if(ifPair1IsPair  && ifPair2IsPair) {
    let value1, value2
    if(Object.hasOwn(arr, pair1[0])) value1 = arr[pair1[0]]
    else value1 = parseInt(pair1[0])
    if(Object.hasOwn(arr, pair2[0])) value2 = arr[pair2[0]]
    else value2 = parseInt(pair2[0])
    if(value1 > value2) return pair1
    else return pair2

  }
  else return []

}

// Extension criteria

function winningPairFromArray(givenPairs) {
  const pairs = []

  for(let i = 0; i < givenPairs.length; i++){
    if(givenPairs[i][0] === givenPairs[i][1]) pairs.push(givenPairs[i])
  }
  
  return getWinningPair(pairs)

}

function getWinningPair(pairs){
  
  const values = []
  for(let i = 0; i < pairs.length; i++){
    if (Object.hasOwn(arr, pairs[i][0])) values.push(arr[pairs[i][0]])
    else values.push(pairs[i][0])
  }

  const maxValue = Math.max.apply(null, values)

  for(let i = 0; i < values.length; i++){
    if (values[i] == maxValue) return pairs[i]
  }

  return []

}

function winning3CardHand(givenCards) {
  const triples = []
  const pairs = []

  for(let i = 0; i < givenCards.length; i++){
    if(givenCards[i][0] === givenCards[i][1] && givenCards[i][1] === givenCards[i][2] ) triples.push(givenCards[i])
  }
  
  for(let i = 0; i < givenCards.length; i++){
    if(givenCards[i][0] === givenCards[i][1] && givenCards[i].length === 2) pairs.push(givenCards[i])
  }

  if(triples.length > 0) return getWinningPair(triples)
  else return getWinningPair(pairs)
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
