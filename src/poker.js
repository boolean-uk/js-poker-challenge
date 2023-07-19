// Core criteria

function winningPair(pair1, pair2) {
  const rankValues = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }
  const r10 = rankValues[pair1[0]]
  const r11 = rankValues[pair1[1]]
  const r20 = rankValues[pair2[0]]
  const r21 = rankValues[pair2[1]]
  if (r10 === r11 && r20 === r21) {
    if (r10 === r20) return []
    return r10 > r20 ? pair1 : pair2
  }
  if (r10 !== r11 && r20 !== r21) return []
  return r10 === r11 ? pair1 : pair2
}

// Extension criteria

function winningPairFromArray(pairs) {
  if (pairs.length === 0) return []
  let strongestPair = pairs[0]
  for (let i = 0; i < pairs.length; ++i) {
    strongestPair = winningPair(strongestPair, pairs[i])
  }
  return strongestPair
}

function winningTriple(triple1, triple2) {
  const rankValues = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }
  const r10 = rankValues[triple1[0]]
  const r11 = rankValues[triple1[1]]
  const r12 = rankValues[triple1[2]]
  const r20 = rankValues[triple2[0]]
  const r21 = rankValues[triple2[1]]
  const r22 = rankValues[triple2[2]]
  if (r10 === r11 && r11 === r12 && r20 === r21 && r21 === r22) {
    if (r10 === r20) return []
    return r10 > r20 ? triple1 : triple2
  }
  if (r10 !== r11 && r20 !== r21) return []
  return r10 === r11 && r11 === r12 ? triple1 : triple2
}
function winningGroup(pair, triple) {
  const rankValues = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
  }
  const rp0 = rankValues[pair[0]]
  const rp1 = rankValues[pair[1]]
  const rt0 = rankValues[triple[0]]
  const rt1 = rankValues[triple[1]]
  const rt2 = rankValues[triple[2]]
  if (rp0 === rp1 && rt0 === rt1 && rt1 === rt2) return triple
  if (rp0 !== rp1 && rt0 !== rt1) return []
  return rp0 === rp1 ? pair : triple
}

function winning3CardHand(groups) {
  if (groups.length === 0) return []
  let strongestGroup = groups[0]
  for (let i = 1; i < groups.length; ++i) {
    /* eslint-disable */
    if (strongestGroup.length === 0)
      strongestGroup = groups[i].length === 2 ? winningPair(strongestGroup, groups[i])
        : winningTriple(strongestGroup, groups[i])
    else if (strongestGroup.length === 2) 
      strongestGroup = groups[i].length === 2 ? winningPair(strongestGroup, groups[i])
        : winningGroup(strongestGroup, groups[i])
    else if (strongestGroup.length === 3)
      strongestGroup = groups[i].length === 3 ? winningTriple(strongestGroup, groups[i])
        : winningGroup(strongestGroup, groups[i])
    /* eslint-enable */
  }
  return strongestGroup
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
