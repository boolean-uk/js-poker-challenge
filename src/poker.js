class Poker {

  constructor() {
    this.isPair = p => p[0] === p[1]
    this.is3OfAKind = p => p[0] === p[1] && p[1] === p[2]
    this.isHigher = (p1, p2) => p1[0] > p2[0] ? p1 : p2
  }

  winningPair(pair1, pair2) {
    let result 
    if (this.isPair(pair1)) result = pair1
    if (this.isPair(pair2)) result = pair2 
    return !this.isPair(pair1) && !this.isPair(pair2) ? [] : 
      this.isPair(pair1) && this.isPair(pair2) ? this.isHigher(pair1, pair2) :
        result
  }

  sortNonRoyals = (arr) => {
    return arr.filter(ps => {
      return !ps.includes("10") && !ps.includes("J") &&
        !ps.includes("Q") && !ps.includes("K") && !ps.includes("A")
    }).sort()
  }

  sortRoyals = (arr) => {
    const sortedRoyals = []
    const royals = arr.filter(ps => {
      return ps.includes("10") || ps.includes("J") ||
        ps.includes("Q") || ps.includes("K") || ps.includes("A")
    })
    royals.map(ps => {
      if(ps.includes("10")) sortedRoyals.push(ps)
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
    return sortedRoyals
  }

  winningPairFromArray(arr) {
    const realPairs = arr.filter(pair => this.isPair(pair))

    const sortedNonRoyals = this.sortNonRoyals(realPairs)
    
    const sortedRoyals = this.sortRoyals(realPairs)

    const sortedRealPairs = sortedNonRoyals.concat(sortedRoyals)
    return realPairs.length > 0 ? sortedRealPairs[sortedRealPairs.length - 1] : realPairs
  }

  winning3CardHand(arr) {
    const onlyPairs = arr.filter(hand => hand.length === 2)
    const realPairs = onlyPairs.filter(pair => this.isPair(pair))
    const winningPair = this.winningPairFromArray(realPairs)

    const real3OfAKind = arr.filter(hand => this.is3OfAKind(hand))
    const sortedNonRoyals = this.sortNonRoyals(real3OfAKind)
    const sortedRoyals = this.sortRoyals(real3OfAKind)
    const sortedReal3OfAKinds = sortedNonRoyals.concat(sortedRoyals)

    return sortedReal3OfAKinds.length > 0 ? sortedReal3OfAKinds[sortedReal3OfAKinds.length - 1] :
      winningPair.length > 0 ? winningPair : []
  }
}

module.exports = Poker
