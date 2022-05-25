class Poker {

  constructor() {
    this.isPair = p => p[0] === p[1]
  }

  winningPair(pair1, pair2) {

    let result 

    if (this.isPair(pair1)) result = pair1
    if (this.isPair(pair2)) result = pair2 

    return !this.isPair(pair1) && !this.isPair(pair2) ? [] : result

  }

  winningPairFromArray(arr) {

    const realPairs = arr.filter(pair => this.isPair(pair))

    const sortedNonRoyals = realPairs.filter(ps => {
      return !ps.includes("J") && !ps.includes("Q") &&
      !ps.includes("K") && !ps.includes("A")
    }).sort()

    const sortedRoyals = []
    const royals = realPairs.filter(ps => {
      return ps.includes("J") || ps.includes("Q") ||
      ps.includes("K") || ps.includes("A")
    })
    royals.map(ps => {
      if(ps.includes("J")) sortedRoyals.push(ps)
    })
    royals.map(ps => {
      if(ps.includes("Q")) sortedRoyals.push(ps)
    })
    royals.map(ps => {
      if(ps.includes("K")) sortedRoyals.push(ps)
    })
    royals.map(ps => {
      if(ps.includes("A")) sortedRoyals.push(ps)
    })

    const sortedRealPairs = sortedNonRoyals.concat(sortedRoyals)
    return realPairs.length > 0 ? sortedRealPairs[sortedRealPairs.length - 1] : realPairs
    
  }
}

module.exports = Poker
