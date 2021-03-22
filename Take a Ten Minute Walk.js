function isValidWalk(walk) {
  //解題思路：用x,y紀錄走的路，最後是(0,0)的話就是回到原點
  if (walk.length > 10) { 
    return false;
  }
  
  let x = 0;
  let y = 0;
  
  for (let i=0; i<walk.length; i++) {
    if (walk[i] == 'n') {
      y += 1;
    } else if (walk[i] == 's') {
      y -= 1;
    } else if (walk[i] == 'e') {
      x += 1;
    } else if (walk[i] == 'w') {
      x -= 1;
    }
  }
  
  if (x==0 && y==0 &&walk.length==10){
    return true;
  }else {
    return false;
  }
  
  
}
