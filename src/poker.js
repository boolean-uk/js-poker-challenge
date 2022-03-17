const cardValue = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 }

class Poker {
  isPair (hand) { return hand[0] === hand[1] || hand[0] === hand[2] || hand[1] === hand[2] }

  isThreeOfAKind (hand) { return hand[0] === hand[1] && hand[1] === hand[2] }

  winningPair (handOne, handTwo) {
    let returnArray = []
    console.log(this.isPair(handOne))
    if (this.isPair(handOne) && !this.isPair(handTwo)) { returnArray = handOne }
    if (this.isPair(handTwo) && !this.isPair(handOne)) { returnArray = handTwo }
    if (this.isPair(handTwo) && this.isPair(handOne)) {
      if (cardValue[handOne[0]] > cardValue[handTwo[0]]) { returnArray = handOne }
      if (cardValue[handTwo[0]] > cardValue[handOne[0]]) { returnArray = handTwo }
    }
    return returnArray
  }

  winningPairFromArray (arrayOfHands) {
    const handOne = arrayOfHands[0]
    const handTwo = arrayOfHands[1]
    const handThree = arrayOfHands[2]
    const handFour = arrayOfHands[3]
    if (arrayOfHands.length === 2) { return this.winningPair(handOne, handTwo) }
    if (arrayOfHands.length === 3) { return this.winningPair(this.winningPair(handOne, handTwo), handThree) }
    if (arrayOfHands.length === 4) { return this.winningPair(this.winningPair(handOne, handTwo), this.winningPair(handThree, handFour)) }
  }

  winning3CardHand (arrayOfHands) {
    let winningHand = []
    for (let i = 0; i < arrayOfHands.length; i++) {
      const hand = arrayOfHands[i]
      if (this.isThreeOfAKind(hand)) {
        winningHand = hand
        break
      } else { winningHand = this.winningPairFromArray(arrayOfHands) }
    }
    return winningHand
  }
}

module.exports = Poker
