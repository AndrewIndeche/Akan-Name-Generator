    let female_names = ['Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama', 'Akosua',] //0-6
    let male_names = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    function dayofTheWeek(CC, YY, MM, DD) {
    return new Date('' + CC + YY + '-' + MM + '-' + DD).getDay()
    }
    var dayofTheWeek = (CC, YY, MM, DD) => new Date ('' + CC + YY + '-' + MM + '-' + DD).getDay()

    function processForm(e) {
        e.preventDefault();

        let gender = document.getElementById("gender").value
        let YY = parseInt(document.getElementById("YY").value)
        let CC = parseInt(document.getElementById("CC").value)
        let MM = parseInt(document.getElementById("MM").value)
        let DD = parseInt(document.getElementById("DD").value)
        if (DD < 0 || DD > 31) {
            return alert( DD + " is not a valid day. The day should be between 0 and 31")
        }
        if (MM < 0 || MM > 12) {
            return alert( MM + " is not a valid month. The month should be between 0 and 12")
        }
        if (gender == "male") {
            var name = male_names[dayofTheWeek(CC,YY,MM,DD)]
            alert("Your Akan name is " + name)
        }
        if (gender == "female") {
            var name = female_names[dayofTheWeek(CC,YY,MM,DD)]
            alert("Your Akan name is " + name)
        }
    }
