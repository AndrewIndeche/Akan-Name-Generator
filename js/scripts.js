function birthday(CC,YY,MM,DD){
  return ((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7) - 1.5
  //return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
}
var dayofTheWeek = birthday(19, 91, 4, 23) //0-6
console.log(dayofTheWeek)
