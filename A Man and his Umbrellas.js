function minUmbrellas(weather) {
  // 解題思路： 紀錄在家雨傘和在公司雨傘
  const arr = weather;
  let AtHome = 0;
  let AtOffice = 0;
  const rain = ["rainy", "thunderstorms"];
    
  for (let i=0 ; i < arr.length ; i++){
    if (rain.includes(arr[i])){ //先檢查是否下雨
      if (i%2 == 0){ //如果餘0就表示是上午時段，要去上班，需檢查家裡是否有傘
        if (AtHome == 0) {
          AtOffice += 1; //買一支傘去上班
        } else { //家裡有傘，拿一支去上班
          AtHome -= 1;
          AtOffice += 1;
        }
      } 
      if (i%2 == 1) { //如果整除就表示是下午時段，要回家，需檢查辦公室是否有傘
        if (AtOffice == 0) {
          AtHome += 1; //買一支傘回家
        } else { //辦公室有傘，拿一支回家
          AtOffice -= 1;
          AtHome += 1;
        }
      }
    }
  }
  return AtOffice+AtHome;
}
