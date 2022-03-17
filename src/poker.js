class Poker {
  //convert the letters (A, J, Q, K) to numbers and make all strings to numbers
  convertLettersToNumbers(cards) {
    const cardsInNumbers = [];
    const cardsCombined = cards.flat();
    for (let card of cardsCombined) {
      if (Number(card)) {
        cardsInNumbers.push(Number(card));
      } else {
        switch (card) {
          case "J":
            cardsInNumbers.push(11);
            break;
          case "Q":
            cardsInNumbers.push(12);
            break;
          case "K":
            cardsInNumbers.push(13);
            break;
          case "A":
            cardsInNumbers.push(14);
            break;
        }
      }
    }
    return cardsInNumbers;
  }

  numbersToLetters(cards) {
    const cardsInLetters = [];

    for (let card of cards) {
      switch (card) {
        case 11:
          cardsInLetters.push("J");
          break;
        case 12:
          cardsInLetters.push("Q");
          break;
        case 13:
          cardsInLetters.push("K");
          break;
        case 14:
          cardsInLetters.push("A");
          break;
        default:
          cardsInLetters.push(card.toString());
      }
    }
    return cardsInLetters;
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

  winningPairFromArray(players) {
    const convertedPlayers = this.convertLettersToNumbers(players);
    const cardsArr = [];
    for (let i = 0; i < convertedPlayers.length; i += 2) {
      if (convertedPlayers[i] === convertedPlayers[i + 1]) {
        cardsArr.push(convertedPlayers[i]);
        cardsArr.push(convertedPlayers[i + 1]);
      }
    }
    cardsArr.sort((a, b) => {
      return a - b;
    });

    return this.numbersToLetters(cardsArr.slice(cardsArr.length - 2));
  }
}

module.exports = Poker;
