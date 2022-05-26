function SaveUserDetails() {
    validateControls();
}

//username
var username;
var specialization = [];
function validateControls() {
    //FirstName

    var uname = document.getElementById("uname")
    if (uname.value == "") {
        window.alert("please enter your first username");
        uname.focus();
        return false;
    }

     //Email
     var email = document.getElementById("email")
     if (email.value == "") {
         window.alert("please enter your valid email Id");
         email.focus();
         return false;
     }

       // Password
    var password = document.getElementById("password")
    if (password.value == "") {
        window.alert("please enter your password");
        password.focus();
        return false;
    }
//select country
    var country = document.getElementById("country")
if (country.selectedIndex < 1) {
window.alert("please choose your country");
country.focus();
return false;
}

    getControlValues();
}