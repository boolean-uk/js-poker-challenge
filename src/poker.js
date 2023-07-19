function getCardValue(card){
  if(card==='J'){
    return 11
}else if(card==='Q'){
    return 12
}else if(card==='K'){
    return 13
}else if(card==='A'){
    return 14
}
return card
}
function winningPair(pair1,pair2) {
  value1=0;value2=0
  if(pair1[0]===pair1[1]){
    if(pair2[0]===pair2[1]){
        value1=getCardValue(pair1[0])
        value2=getCardValue(pair2[0])
        
        return value1>value2?pair1:pair2
    }else{
      return pair1;
    }
  }else if(pair2[0]===pair2[1]){
    return pair2;
  }
  return []
}

// Extension criteria

function winningPairFromArray(arr) {
  newarr=[]
  for(let i=0;i<arr.length;i++){

      if(arr[i][0]===arr[i][1]){
          newarr.push(arr[i])
      }
  }
  if(newarr.length==0){
    return []
  }
  winner=[0,0]
  for(let i=0;i<newarr.length;i++){
    winner=winningPair(winner,newarr[i]);
    
  }
 
  return winner
}

function winning3CardHand(arr) {
  threes=[]
  for(let i=0;i<arr.length;i++){
    if(arr[i].length==3){
      if(arr[i][0]===arr[i][1]&&arr[i][1]===arr[i][2]){
        threes.push(arr[i]);
      }else if (arr[i][0]===arr[i][1]){
        arr[i]=[arr[i][0],arr[i][1]]
      }else if(arr[i][1]===arr[i][2]){
        arr[i]=[arr[i][1],arr[i][2]]
      }else if(arr[i][0]===arr[i][2]){
        arr[i]=[arr[i][0],arr[i][2]]
      }else{
        arr[i]=[0,1]
      }
    }
  }
    if(threes.length>0){
      winner=0;
      for(let i=0;i<threes.length;i++){
        value=getCardValue(threes[i][0])
          if(winner<value){
            winner=value
          }
      }
      return [winner,winner,winner]
    }
    else{
      return winningPairFromArray(arr)
    }
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
