class Poker {
  constructor() {
    this.cardValue = {
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
      A: 14,
    };
  }

  winningPair(player1, player2) {
    // If there are no pairs, return an empty array
    return player1[0] !== player1[1] && player2[0] !== player2[1]
      ? []
      : // else if, player 1 has a pair but player 2 not,
      player1[0] === player1[1] && player2[0] !== player2[1]
      ? player1
      : // else if, player 2 has a pair but player 1 not
      player1[0] !== player1[1] && player2[0] === player2[1]
      ? player2
      : // else, return the player that has a bigger number
      this.cardValue[player1[0]] > this.cardValue[player2[0]]
      ? player1
      : player2;
  }

  // winningPairFromArray(players) {
  //   const convertedPlayers = this.lettersToNumbers(players);
  //   const cardsArr = [];
  //   // Go through the entire array and check if every two cards are a pair
  //   for (let i = 0; i < convertedPlayers.length; i += 2) {
  //     if (convertedPlayers[i] === convertedPlayers[i + 1]) {
  //       cardsArr.push(convertedPlayers[i]);
  //       cardsArr.push(convertedPlayers[i + 1]);
  //     }
  //   }
  //   // Sort the cards from the smallest to biggest
  //   cardsArr.sort((a, b) => {
  //     return a - b;
  //   });

  //   // Return the last two index as they are the biggest pair and convert them into string
  //   const winningPair = cardsArr.slice(cardsArr.length - 2);
  //   return this.numbersToLetters(winningPair);
  // }

  // winning3CardHand(players) {
  //   const cardsArr = [];

  //   // push the cards array if all the elements are the same
  //   for (let cards of players) {
  //     if (cards.every((card) => card === cards[0])) cardsArr.push(cards);
  //   }

  //   console.log(cardsArr);
  //   const arr = cardsArr.filter((cards) => {
  //     if (cards.length === 3) {
  //       return cards;
  //     } if (c)
  //   });
  //   console.log(`arr: ${arr}`);

  //   // combine the arrays and convert letters to numbers
  //   const cardsCombined = arr.flat();
  //   const convertedCards = this.lettersToNumbers(cardsCombined);

  //   console.log(`convertedCards: ${convertedCards}`);

  //   // Sort the cards from the smallest to biggest

  //   convertedCards.sort((a, b) => {
  //     return a - b;
  //   });

  //   //filter the numbers that has the biggest value
  //   const winning3Cards = convertedCards.filter(
  //     (num) => convertedCards[convertedCards.length - 1] === num
  //   );

  //   return this.numbersToLetters(winning3Cards);
  // }
}

module.exports = Poker;

// const poker = new Poker();
// console.log(
//   poker.winning3CardHand([
//     ["Q", "Q"],
//     ["9", "9"],
//   ])
// );
