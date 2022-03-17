class Poker {
  //convert the letters (A, J, Q, K) to numbers and make all strings to numbers
  convertLettersToNumbers(cards) {
    const cardsInNumbers = [];
    for (let card of cards) {
      if (Number(card)) {
        cardsInNumbers.push(Number(card));
      } else {
        switch (card) {
          case "A":
            cardsInNumbers.push(1);
            break;
          case "J":
            cardsInNumbers.push(11);
            break;
          case "Q":
            cardsInNumbers.push(12);
            break;
          case "K":
            cardsInNumbers.push(13);
            break;
        }
      }
    }
    return cardsInNumbers;
  }

  winningPair(player1, player2) {
    const convertedPlayer1 = this.convertLettersToNumbers(player1);
    const convertedPlayer2 = this.convertLettersToNumbers(player2);

    // If there are no pairs, return an empty array
    return convertedPlayer1[0] !== convertedPlayer1[1] &&
      convertedPlayer2[0] !== convertedPlayer2[1]
      ? []
      : // else if, player 1 has a pair but player 2 not,
      convertedPlayer1[0] === convertedPlayer1[1] &&
        convertedPlayer2[0] !== convertedPlayer2[1]
      ? player1
      : // else if, player 2 has a pair but player 1 not
      convertedPlayer1[0] !== convertedPlayer1[1] &&
        convertedPlayer2[0] === convertedPlayer2[1]
      ? player2
      : // else, return the player that has a bigger number
      convertedPlayer1[0] > convertedPlayer2[0]
      ? player1
      : player2;
  }
}

module.exports = Poker;
