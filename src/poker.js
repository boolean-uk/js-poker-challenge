const convertValues = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}
const convertArray = (hand) =>
  hand.map((card) => Number(convertValues[card] || card))

function winningPair(hand1, hand2) {
  const hand1Converted = convertArray(hand1)
  const hand2Converted = convertArray(hand2)
  //Both hands have pair
  if (hand1Converted[0]===hand1Converted[1]&&hand2Converted[0]===hand2Converted[1]){
      return hand1Converted > hand2Converted ? hand1 : hand2 
  }
  //Hand 1 has pair
  if (hand1Converted[0]===hand1Converted[1]&&hand2Converted[0]!=hand2Converted[1]){
    return hand1
  }
  //Hand 2 has pair
  if (hand1Converted[0]!=hand1Converted[1]&&hand2Converted[0]===hand2Converted[1]){
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


function winning3CardHand(hands) {
let triples = []
for (let i = 0; i < hands.length; i++)
{
  //TRIPLES
  if(hands[i].length===3)
  {
    if (hands[i][0]===hands[i][1]===hands[i][2])
    {
      triples.push(hands[i])
    }
    else if (hands[i][0]===hands[i][1])
    {
      hands[i]=[hands[i][0],hands[i][1]]
    }
    else if (hands[i][0]===hands[i][2])
    {
      hands[i]=[hands[i][0],hands[i][2]]
    }
    else if (hands[i][1]===hands[i][2])
    {
      hands[i]=[hands[i][1],hands[i][2]]
    } 
  }
  //CHECK HIGHEST CARD
  if (triples.length > 0)
  {
    let win = []
    let convertedTriple = convertArray(triples)
    for(let i=0; i < triples.length; i++)
    {
      let convertedWin = convertArray(win)
      win = convertedWin < convertedTriple[i] ? triples[i] : win
    }
    return [win[0],win[0],win[0]]
  }
  else
  {
    return winningPairFromArray(hands)
  } 

}

}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
