function winningPair(first, second) {
  if (first[0] === first[1] && second[0] === second[1]) {
    if (first[0] > second[0]) {
      return first
    } else if (first[0] < second[0]) {
      return second
    }
  } else if (first[0] === first[1] && second[0] !== second[1]) {
    return first
  } else if (first[0] !== first[1] && second[0] === second[1]) {
    return second
  }
  return []
}

// Extension criteria

function winningPairFromArray(playersCards) {
  // winningPair =[undefined,undefined]
  // highestCard =0
  // for (let i = 0; i < playersCards.length; i++) {
  //   if(checkIfPair(playersCards[i] ===1) && playersCards[i][0] > highestCard ){
  //     winningPair = playersCards [i]
  //     highestCard = playersCards [i][0]
  //   }
  // }
  // return winningPair
}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
