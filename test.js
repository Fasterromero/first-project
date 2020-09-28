function validateFirstName(){
    var firstName = document.getElementById("firstName").value
    if (firstName =="") {
        document.getElementById("namePrompt").innerHTML="Please, enter a name."
        return false
        
    } else {
        document.getElementById("namePrompt").innerHTML=""
        return true
    }
}

function validateLastName(){
    var lastName = document.getElementById("lastName").value
    if (lastName =="") {
        document.getElementById("lastNamePrompt").innerHTML="Please, enter a Last name."
        return false
        
    } else {
        document.getElementById("lastNamePrompt").innerHTML=""
        return true
    }
}

function validateCheckIn(){
    var checkIn = document.getElementById("checkIn").value
    if (checkIn =="") {
        document.getElementById("checkInPrompt").innerHTML="Please, select your check in."
        return false
        
    } else {
        document.getElementById("checkInPrompt").innerHTML=""
        return true
    }
}

    function validateCheckOut(){
        var checkOut = document.getElementById("checkOut").value
        if (checkOut =="") {
            document.getElementById("checkOutPrompt").innerHTML="Please, select your check out."
            return false
        } else {
            document.getElementById("checkOutPrompt").innerHTML=""
            return true
        }
    }

    function validatePeople(){
            var peopleNumber = document.getElementById("quantityPeople").value
            if (peopleNumber == "") {
                document.getElementById("peoplePrompt").innerHTML="Please, input a number."
                return false
            }
            if (peopleNumber > 20) {
                document.getElementById("peoplePrompt").innerHTML="Please, no more than 20."
                return false
                
            } else {
                document.getElementById("peoplePrompt").innerHTML=""
                return true
            }
        }

    function validateForm(){
        var firstName = document.getElementById("firstName").value
        var lastName = document.getElementById("lastName").value
        var checkIn = document.getElementById("checkIn").value
        var checkOut = document.getElementById("checkOut").value
        var peopleNumber = document.getElementById("quantityPeople").value

        if (firstName == ""){
            alert("Please, complete the form.")
            return false
          
        }if (lastName == ""){
                alert("Please, complete the form.")
            return false

        }if (checkIn == ""){
                    alert("Please, complete the form.")
            return false
        }if (checkOut == ""){
                        alert("Please, complete the form.")
            return false
                    
        }if (peopleNumber == ""){
                        alert("Please, complete the form.")
            return false
        
        }if (peopleNumber > 20){
            alert("Please, no more than 20 people per reservation.")
                        
            return false
        
        } else {
            alert("¡Thanks! No rooms available for your date. ¡We will send you more information soon!")
        return true

         }
        }       
        
    
        