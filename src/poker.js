class Poker {
  convertLettersToNumbers(cards) {
    const cardsInNumbers = [];
    for (let card of cards) {
      if (Number(card)) {
        cardsInNumbers.push(Number(card));
      } else {
        if (card === "A") {
          cardsInNumbers.push(1);
        } else if (card === "J") {
          cardsInNumbers.push(11);
        } else if (card === "Q") {
          cardsInNumbers.push(12);
        } else if (card === "K") {
          cardsInNumbers.push(13);
        }
      }
    }
    return cardsInNumbers;
  }

  winningPair(player1, player2) {
    const convertedPlayer1 = this.convertLettersToNumbers(player1);
    const convertedPlayer2 = this.convertLettersToNumbers(player2);

    if (
      convertedPlayer1[0] !== convertedPlayer1[1] &&
      convertedPlayer2[0] !== convertedPlayer2[1]
    ) {
      return [];
    } else if (
      convertedPlayer1[0] === convertedPlayer1[1] &&
      convertedPlayer2[0] !== convertedPlayer2[1]
    ) {
      return player1;
    } else if (
      convertedPlayer1[0] !== convertedPlayer1[1] &&
      convertedPlayer2[0] === convertedPlayer2[1]
    ) {
      return player2;
    } else {
      if (convertedPlayer1[0] > convertedPlayer2[0]) {
        return player1;
      } else {
        return player2;
      }
    }
  }
}

module.exports = Poker;
