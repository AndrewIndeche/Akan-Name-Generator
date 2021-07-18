function birthday(CC,YY,MM,DD){
  return ((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7) - 1.5
  //return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 gives wrong day of 3.5
}

var dayofTheWeek = birthday(19, 91, 4, 23)

let female_names = ["Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua",] //0-6
let male_names = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

let gender = document.getElementById("gender").value
let yy = parseInt(document.getElementById("yy").value)
let cc = parseInt(document.getElementById("cc").value)
let mm = parseInt(document.getElementById("mm").value)
let dd = parseInt(document.getElementById("dd").value)

console.log(dayofTheWeek)
