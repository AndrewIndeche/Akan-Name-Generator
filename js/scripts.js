function birthday(CC,YY,MM,DD){
  return (DD+((13*(MM+1))/5)+YY+(YY/4)-(YY/100)+(YY/400)) % 7
  //return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
}
let day = birthday()
console.log(day)
