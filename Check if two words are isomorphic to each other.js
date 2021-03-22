function isomorph(a, b) {
  //解題思路：自己建立一個map，讓每個字都有相對應的值，而且值不可以重複跟其他map

  //先檢查長度，如果長度不一樣就不是isomorphic
  if (a.length !== b.length) {
    return false;
  }

  //建立一個空的map
  const map = new Map();
  //建立一個空的set來儲存已經map過的值
  const s = new Set();

  //for loop for every character
  for (let i = 0; i < a.length; i++) {
    let charA = a[i]; //紀錄a的每個char
    let charB = b[i]; //紀錄b的每個char

    if (map.has(charA)) { //如果map裡面已經有charA這個key
      if (map.get(charA) !== charB) { //比較value是否和charB相等
        return false;
      }
    } else { //map裡面沒有charA這個key
      if (s.has(charB)) { //沒有charA這個key，但卻有這個值，表示不是一對一的關係
        return false;
      }
      map.set(charA,charB); // 把charA和其對應的值存入map
      s.add(charB); //把值存進去set裡面，用來確認是否是一對一的關係
    }
  }
  return true;
}
