var min = function(list){
    let m = list[0]
    for (let i = 1; i < list.length; i++){
      if(list[i] < m) m = list[i];
    }
  return m;
}

var max = function(list){
    let m = list[0]
    for (let i = 1; i < list.length; i++){
      if(list[i] > m) m = list[i];
    }
  return m;
