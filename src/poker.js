class Poker {
  winningPair(player1, player2) {
    if (player1[0] !== player1[1] && player2[0] !== player2[1]) {
      return [];
    } else if (player1[0] === player1[1] && player2[0] !== player2[1]) {
      return player1;
    } else if (player1[0] !== player1[1] && player2[0] === player2[1]) {
      return player2;
    } else {
      if (player1[0] > player2[0]) {
        return player1;
      } else {
        return player2;
      }
    }
  }
}

module.exports = Poker;
