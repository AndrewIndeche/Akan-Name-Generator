    let female_names = ["Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", "Akosua",] //0-6
    let male_names = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    function getBirthday(CC, YY, MM, DD) {
        return ((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7)-1.5
    }
    function processForm(e) {
        e.preventDefault();
        let gender = document.getElementById("gender").value
        let YY = parseInt(document.getElementById("YY").value)
        let CC = parseInt(document.getElementById("CC").value)
        let MM = parseInt(document.getElementById("MM").value)
        let DD = parseInt(document.getElementById("DD").value)
        if (DD < 0 || DD > 31) {
            return alert( DD + " is not a valid day. The day should be between zero and 31")
        }
        if (MM < 0 || MM > 31) {
            return alert( MM + " is not a valid month. The month should be between zero and twelve")
        }
        var dayOfTheWeek = getBirthday(CC, YY, MM, DD) //0-6
        if (gender == "male") {
            var name = male_names[dayOfTheWeek]
            alert("Your Akan name is " + name)
        }
        if (gender == "female") {
            var name = female_names[dayOfTheWeek]
            alert("Your Akan name is " + name)
        }
    }
