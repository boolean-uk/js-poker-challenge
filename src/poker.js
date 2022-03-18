const pointMap = {
  2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14
}
// 1) Indentation
// 2) If statement for loops, functions need {} before the code inside them
// 3) Don't worry about lots of functions. Get code working then extract to other functions after

class Poker {
  winningPair (handOne, handTwo) {
  // cardHands: ['A', 'A'], ['3', 'K']
    const handOneIsPair = this.isPairCheck(handOne) // ['A', 'A'] = true, because is pair
    const handTwoIsPair = this.isPairCheck(handTwo) // ['3', 'K'] = false, because is not a pair
    console.log('handOne = ', handOne, handOneIsPair)
    console.log('handTwo = ', handTwo, handTwoIsPair)

    // if handOne && handTwo are both false return []

    if (!handOneIsPair && !handTwoIsPair) { return [] }

    if (handOneIsPair && !handTwoIsPair) { return handOne }

    if (!handOneIsPair && handTwoIsPair) { return handTwo }

    if (pointMap[handOne[0]] > pointMap[handTwo[0]]) {
      return handOne
    } else {
      return handTwo
    }
  }

  // if handOneisPair & !handTwoIsPair return handOne
  // if (handOneIsPair || (handTwoIsPair) === true)

  // Calculate the score of hand by adding handOne together (hand[i - 1] + hand[i])
  // let handScore = 0

  // handScore = hand[0] + hand[1]

  // return handScore

  // Check if hand is a pair
  isPairCheck (hand) {
    return hand[0] === hand[1]
  }
}

// 1) hand = ['A', 'A']
// 2) hand = [3, 'K']
// If hand has a pair of card that are identical return true else false
// const firstCard = hand[0] // 'A' and 3
// for (let i = 1; i < hand.length; i++) {
//   if (firstCard !== hand[i]) {
//     //Current card not equal firstCard so no pair
//     return false // for hand = [3, 'K']
//   }
// }
// // If we reach this point then every card in the hand equals the first card, so we have a pair
// return true // for hand = ['A', 'A']

// const poker = new Poker()
// const result = poker.winningPair(['Card2', 'Card5'], ['Card3', 'Card7'])
// console.log(result)

module.exports = Poker

// winningPair(array1, array2)

// Input: [string, string], [string, string]
// Output: [string, string]
// ------
// IS_ARRAY1_A_PAIR is false
// IS_ARRAY2_A_PAIR is false

// IF array1 index 0 is the same as array1 index 1 THEN
//   set IS_ARRAY1_A_PAIR to TRUE
// END IF

// IF array2 index 0 is the same as array2 index 1 THEN
//   set IS_ARRAY2_A_PAIR to TRUE
// END IF

// IF array1 and array2 are not pairs THEN
//   output an empty array
// END IF

// IF array1 is a pair but array2 is not a pair THEN
//   ouput array1
// END IF

// IF array2 is a pair but array1 is not a pair THEN
//   output array2
// END IF

// IF array1 and array2 are both pairs THEN

//   ARRAY1_SCORE is 0
//   FOR each item in array1
//     add the current item's point value to ARRAY1_SCORE
//   END FOR

//   ARRAY2_SCORE is 0
//   FOR each item in array2
//     add the current item's point value to ARRAY2_SCORE
//   END FOR

//   output the array with the highest score

// END IF
