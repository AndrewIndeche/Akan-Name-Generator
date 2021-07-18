function birthday(CC,YY,MM,DD){
  return ((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7) - 1.5
  //return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 gives wrong day of 3.5
}

var dayofTheWeek = birthday(19, 91, 4, 23)

let female_names = ["Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua",] //0-6
let male_names = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

let gender = document.getElementById("gender").value
let YY = parseInt(document.getElementById("YY").value)
let CC = parseInt(document.getElementById("CC").value)
let MM = parseInt(document.getElementById("MM").value)
let DD = parseInt(document.getElementById("DD").value)

if (dd < 0 || dd > 31) {
       return alert( dd + " is not a valid day. The day should be between zero and 31")
            }
if (mm < 0 || mm > 31) {
      return alert( mm + " is not a valid month. The month should be between zero and twelve")
            }

if (gender == "male") {
       var name = male_names[dayOfTheWeek]
      return alert("Your Akan name is " + name)
            }

if (gender == "female") {
      var name = female_names[dayOfTheWeek]
    returnalert("Your Akan name is " + name)
            }
console.log(dayofTheWeek)
